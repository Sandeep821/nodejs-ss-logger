const methodInfo = {
    methodName: '',
    methodCount: 0,
};

export const setMethodCount = (method) => {
    if (method === methodInfo.methodName) {
        methodInfo.methodCount++;
    } else {
        methodInfo.methodName = methodInfo;
    }

    return methodInfo.methodCount;
}