const doAfter = (sec) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res(sec);
            rej('err');
        }, sec * 1000)
    })
};