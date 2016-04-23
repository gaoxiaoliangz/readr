import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-p"
    defaultPosition="bottom"
    defaultIsVisible={false}
    defaultSize={0.5}>
    <LogMonitor />
  </DockMonitor>
)
