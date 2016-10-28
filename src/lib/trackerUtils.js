
export function validate(tracker) {
  if (!tracker.description) {
    return false;
  }
  if (!tracker.time) {
    return false;
  }
  if (!tracker.projectId) {
    return false;
  }

  return true;
}
