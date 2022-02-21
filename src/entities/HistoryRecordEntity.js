export default class HistoryRecordEntity {
  operation = null
  elementId = null
  date = null

  constructor(elementId, operation) {
    this.elementId = elementId
    this.operation = operation
    this.date = new Date()
  }
}
