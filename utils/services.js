export class Service {
  static CODE = { FAILED: "FAILED", OK: "OK" };
  static ERROR = { DB_ERR: "Database Error" };

  static result = async (type = this.OK, reason = null, values = {}) => {
    return { type, reason, values };
  };
}
