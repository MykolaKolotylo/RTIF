### Create DB and put to this stpre data:
    const request = indexedDB.open('db-name', 2);
    request.onupgradeneeded = () => {
        const db = request.result;
        const storage = db.createObjectStore('key_value_storage');
        storage.add('value','key',);
    };
    