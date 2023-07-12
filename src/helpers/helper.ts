/**
 * This method is responsible to put statement in sleep for given time
 * @params time
 * @returns Promise
 */
export const debounce = (time: number): Promise<boolean> => {
    let timeout;
    if (timeout) {
        clearTimeout(timeout)
    }

    return new Promise(resolve => {
        timeout = setTimeout(() => resolve(true), time)
    }
    );
}