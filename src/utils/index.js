export function copyTextToClipboard(text) {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      return true;
    })
    .catch((err) => {
      return false;
    });
}
