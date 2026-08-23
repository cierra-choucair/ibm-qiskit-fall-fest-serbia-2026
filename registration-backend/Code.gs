/**
 * Qiskit Fall Fest Serbia — registration collector.
 *
 * Receives POSTs from the site's registration form and appends each
 * entry as a row in the Google Sheet this script is attached to.
 * Deploy steps: see registration-backend/README.md (about 5 minutes).
 */

var SHEET_NAME = "Registrations";
var FIELDS = [
  "name",
  "email",
  "affiliation",
  "status",
  "experience",
  "lecture_day",
  "hackathon_application",
  "notes",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["timestamp"].concat(FIELDS));
      sheet.setFrozenRows(1);
    }
    var p = (e && e.parameter) || {};
    var row = [new Date()];
    for (var i = 0; i < FIELDS.length; i++) {
      row.push(p[FIELDS[i]] || "");
    }
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
