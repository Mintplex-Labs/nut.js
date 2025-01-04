import ln from "./libnut";

function getLibnut() {
    if (process.platform === 'win32') {
        if(process.arch === 'arm64') return require("@nut-tree-fork/libnut-winarm64");
        return require("@nut-tree-fork/libnut-win32");
    } else if (process.platform === 'linux') {
        return require("@nut-tree-fork/libnut-linux");
    } else {
        return require("@nut-tree-fork/libnut-darwin");
    }
}

const libnut: typeof ln = getLibnut();
export {
    libnut,
}