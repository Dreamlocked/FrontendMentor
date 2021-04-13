function duplicateEncode(word) {
  word = word.toLowerCase();
  helper = word;
  word.split("").forEach((x) => {
    if (word.replace(x, "").includes(x)) {
      helper = word.replaceAll(x,")")
    } else {
        helper = word.replace(x,"(")
    }
  });
  return helper;
}

console.log(duplicateEncode("xRbybT)bubebbblb(Ib"));
