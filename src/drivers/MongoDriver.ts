import { Db, MongoClient } from "mongodb";

export class MongoDriver {
  private static db: Db;
  private static mongoClient: MongoClient;

  private constructor() {}

    /**
     * First, you have to connnect to the database. Must be called before anything else.
     *
     * @param {string} dbIP
     */

    private async connect(dbURI: string, retryAttempt?: number): Promise<void> {
      try {
        MongoDriver.mongoClient = await MongoClient.connect(dbURI);
        MongoDriver.db = MongoDriver.mongoClient.db("resources");
      } catch (error) {
        if (!retryAttempt) {
          this.connect(dbURI, 1);
        } else {
          return Promise.reject(
            `Problem connecting to database at ${dbURI}`
          );
        }
      }
    }
    /**
     * Close the database.
     */
    // tslint:disable-next-line: member-ordering
    public static disconnect(): void {
      MongoDriver.mongoClient.close();
    }

    // tslint:disable-next-line: member-ordering
    public static async build(dburi: string): Promise<void> {
      try {
        if (!MongoDriver.mongoClient) {
          const driver = new MongoDriver();
          await driver.connect(dburi);
        } else {
          return Promise.reject(
            new Error("There can only be one. MongoClient that is at least."),
          );
        }
      } catch (error) {
        return Promise.reject(
          `Problem building connection.`
        );
      }
    }
    // tslint:disable-next-line: member-ordering
    public static getConnection() {
      return this.db;
    }
}
