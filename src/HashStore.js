
import {createHash} from 'crypto';

var STORE = {};
export const PARENT_ATTR="_parent";
export const HASH_ATTR="_hash";

function calcHash(o) {
    var message = JSON.stringify(o);
    const hash = createHash("sha256");
    return hash.update(message).digest("hex");
}

function store(o) {
    var hash = calcHash(o);
    STORE[hash] = o;
    localStorage.setItem("STORE",JSON.stringify(STORE));
    return hash;
}

function reload() {
    STORE = JSON.parse(localStorage.getItem("STORE"));
}

export function create(parent, data) {
    if(data == null || data[PARENT_ATTR] != null && data[HASH_ATTR] != null) {
        throw "Bad data";
    }
    if(parent == null) {
        throw "Orphan";
    }
    data[PARENT_ATTR] = parent;
    return store(data);
}
    
export function issue(data) {
    if(data == null) throw "Bad data";
    console.log("DATA: " + JSON.stringify(STORE));
    return store(data);
}

export function history(hash) {
    reload();
    console.log("HISTORY STORE:", STORE);
    var result = [];
    var cursor = hash;
    while(cursor != null && STORE[cursor] != null) {
        var o = STORE[cursor];
        o[HASH_ATTR] = cursor;
        result.unshift(STORE[cursor]);
        cursor = result[0][PARENT_ATTR];
    }
    return result;
}