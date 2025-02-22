import { DevtoolsDetector } from './classes/devtools-detector';
import { DevtoolsDetectorListener } from './types/devtools-detector-listener.type';
import * as checkers from './checkers/checkers';

const defaultDetector = new DevtoolsDetector({
  // 会按照 checker 的顺序执行检查
  checkers: [
    checkers.erudaChecker,
    checkers.elementIdChecker,
    checkers.regToStringChecker,
    checkers.functionToStringChecker,
    checkers.depRegToStringChecker,
    checkers.dateToStringChecker,
    checkers.performanceChecker,
    // checkers.debuggerChecker,
  ],
});

export function addListener(listener: DevtoolsDetectorListener) {
  defaultDetector.addListener(listener);
}

export function removeListener(listener: DevtoolsDetectorListener) {
  defaultDetector.removeListener(listener);
}

export function isLaunch() {
  return defaultDetector.isLaunch();
}

export function launch() {
  defaultDetector.launch();
}

export function stop() {
  defaultDetector.stop();
}

export function setDetectDelay(time: number) {
  defaultDetector.setDetectDelay(time);
}

export default defaultDetector;

export { DevtoolsDetail } from './types/devtools-detail.type';
export { DevtoolsDetectorListener } from './types/devtools-detector-listener.type';
export { DevtoolsStatusChecker } from './types/devtools-status-checker.type';

export { DevtoolsDetector, checkers };

export { match, specificVersionMatch } from './shared/utils';

export * from './shared/context';
export * from './shared/console';
export * from './shared/version-map';
export * from './shared/system-info';
