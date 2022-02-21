import HistoryRecordEntity from './entities/HistoryRecordEntity'
import historyEventType from './types/HistoryEventType'

export default {
  state: {
    history: [],
    elements: [],
    selectedIds: [],
    isLoaded: false,
  },

  mutations: {
    setData(state, data) {
      state.elements = data
      state.isLoaded = true
    },

    addElement(state, elementId) {
      state.selectedIds.push(elementId)
      state.history.push(
        new HistoryRecordEntity(elementId, historyEventType.addElement)
      )
    },

    deleteElement(state, elementId) {
      state.selectedIds = state.selectedIds.filter((v) => v !== elementId)
      state.history.push(
        new HistoryRecordEntity(elementId, historyEventType.deleteElement)
      )
    },
  },

  getters: {
    isDataLoaded(state) {
      return state.isLoaded
    },

    elements(state) {
      return state.elements
    },

    elementsById(state) {
      const result = {}
      state.elements.forEach((v) => (result[v.id] = v))
      return result
    },

    history(state) {
      return state.history
    },

    selectedIdsAsObject(state) {
      const result = {}
      state.selectedIds.forEach((v) => (result[v] = v))
      return result
    },

    selectedIdsAsArray(state) {
      return state.selectedIds
    },
  },
}
