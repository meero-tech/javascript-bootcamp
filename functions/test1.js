//Bikin fungsi untuk reverse array(tidak boleh menggunakan fungsi yg sudah jadi, contohnya reverse array) [1,11,23,24,41,55,78,90]
let a = [1,11,23,24,41,55,78,90]
let reverse
console.log(a.length)
function reverseArray(){
    console.log(a[0])
    for( i=a.length;i>=0;i--){
        var c = a[i]
        for(i=0;i<8;i++){
            reverse[i] = c
            return console.log(reverse[i])
        }
    }
}
reverseArray()
/*----
a = 2
b = 4
swap(a,b)*/