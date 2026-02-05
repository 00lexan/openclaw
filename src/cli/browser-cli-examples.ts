export const browserCoreExamples = [
  " browser status",
  " browser start",
  " browser stop",
  " browser tabs",
  " browser open https://example.com",
  " browser focus abcd1234",
  " browser close abcd1234",
  " browser screenshot",
  " browser screenshot --full-page",
  " browser screenshot --ref 12",
  " browser snapshot",
  " browser snapshot --format aria --limit 200",
  " browser snapshot --efficient",
  " browser snapshot --labels",
];

export const browserActionExamples = [
  " browser navigate https://example.com",
  " browser resize 1280 720",
  " browser click 12 --double",
  ' browser type 23 "hello" --submit',
  " browser press Enter",
  " browser hover 44",
  " browser drag 10 11",
  " browser select 9 OptionA OptionB",
  " browser upload /tmp/file.pdf",
  ' browser fill --fields \'[{"ref":"1","value":"Ada"}]\'',
  " browser dialog --accept",
  ' browser wait --text "Done"',
  " browser evaluate --fn '(el) => el.textContent' --ref 7",
  " browser console --level error",
  " browser pdf",
];


