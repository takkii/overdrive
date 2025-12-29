import fetch from 'node-fetch';
import {existsSync, readFileSync} from 'node:fs';


class Env {
    async run() {
        const json_data = './data.json'

        try {
            if (existsSync(`${json_data}`)) {
                const data = JSON.parse(readFileSync(`${json_data}`, 'utf8'));
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    controller.abort();
                }, 5000);

                const response = await fetch('http://localhost:1337/datas', {
                    signal: controller.signal,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            } else {
                console.log('File Not Found ' + `${json_data}`);
            }

        } catch
            (error) {
            console.error('Error: ', error);
        }
    }
}

const environ = new Env();
environ.run();