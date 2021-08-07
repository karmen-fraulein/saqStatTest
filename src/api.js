export const api = fetch(
  "http://kaleidoscope.geostat.ge/kaleidoscope/generator.php?year=2019&month=2&period=year"
).then((res) => {
  if (res.ok) {
    return res.json();
  }
  return res;
});
