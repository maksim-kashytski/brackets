function search(simbol, bracketsConfig) {
    for (var i = 0; i < bracketsConfig.length; i++)
        if (simbol == bracketsConfig[i][0])
            return bracketsConfig[i][1];
}

module.exports = function check(str, bracketsConfig) {
    var empty = str.split('');

    if (empty.length % 2 != 0)
        return false;

outer:  while (true) {
            if (empty.length == 0)
                return true;
            for (var i = 0; i < empty.length - 1; i++) {
                if (empty[i + 1] == search(empty[i], bracketsConfig)) {
                    empty.splice(i + 1, 1);
                    empty.splice(i, 1);
                    break;
                }
                if (i == empty.length - 2)
                    break outer;
            }
        }

   return false;
}
