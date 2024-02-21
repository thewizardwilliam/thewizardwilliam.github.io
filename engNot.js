function engNot(n) {
let s,b = 1;
if (n >= 1000000000000) {
s = "T"
b = 1000000000000;
} else if (n >= 1000000000) {
s = "G"
b = 1000000000;
} else if (n >= 1000000) {
s = "M"
b = 1000000;
} else if (n >= 1000) {
s = "k"
b = 1000;
} else if (n >= 1) {
s = ""
} else if (n >= 0.001) {
s = "m"
b = 0.001;
} else if (n >= 0.000001) {
s = "µ"
b = 0.000001;
} else if (n >= 0.000000001) {
s = "n"
b = 0.000000001;
} else {
s = "p"
b = 0.000000000001;
}
return (n * 100000 / b / 100000) + s
}
