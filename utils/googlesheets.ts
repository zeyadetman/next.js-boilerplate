import { google } from "googleapis";

const TEXTS_SHEET_NAME = "blog";
export async function getTopics() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: TEXTS_SHEET_NAME,
    });

    const rows = response.data.values;
    if (rows?.length) {
      const rowsWithoutHeader = rows.slice(1, rows.length);
      const data = rowsWithoutHeader.map((row) => row[0]);

      console.log(data);

      return data;
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
