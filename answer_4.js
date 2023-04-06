function example(){
    function dummy() {
        return 2;
    }
    return dummy();
    function dummy() {
        return 5;
    }
}

alert(example());

//output dari alert adalah 5
//karena pada javascript akan menjalankan function dummy() yang terakhir, dan function dummy() 
//diatasnya akan diabaikan, dan pada function dummy() terakhir mereturnkan 5.