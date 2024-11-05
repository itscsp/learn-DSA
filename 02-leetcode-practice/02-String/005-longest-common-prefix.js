var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for(let i=0; i<strs.length;i++){
        // while(strs[])
        console.log(strs[i].indexOf(prefix));
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0,-1)
            console.log(prefix.slice(0,-1))
    console.log(prefix)

            if (prefix === "") return "";
        }
    }
    console.log(prefix)

};

longestCommonPrefix(["flower","flow","flight"])