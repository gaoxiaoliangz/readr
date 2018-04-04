const initializing = {
  initial: 'initStart',
  states: {
    setBookId: {
      on: {
        'SET_BOOK_ID_DONE': 'initConfig'
      }
    },
    initConfig: {
      onEntry: ['initConfig'],
      on: {
        'INIT_CONFIG_SUCCESS': 'calcLayout'
      }
    },
    calcLayout: {
      onEntry: ['calcLayout'],
      on: {
        'CALC_LAYOUT_SUCCESS': 'fetchRemoteProgress'
      }
    },
    fetchRemoteProgress: {
      onEntry: ['fetchRemoteProgress'],
      on: {
        'FETCH_REMOTE_PROGRESS_SUCCESS': 'initComplete'
      }
    },
    initComplete: {
      on: {
        'INIT_REQUEST': 'initStart'
      }
    }
  }
}

export default {
  initial: 'start',
  states: {
    init: {
      on: {
        INIT_BOOK: 'initializing'
      }
    },
    initializing: {
      ...initializing
    }
  }
}
