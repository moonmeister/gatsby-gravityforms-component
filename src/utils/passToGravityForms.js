import axios from 'axios'

export default async (baseUrl, formData, lambdaEndpoint) => {
    let multiPartData = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof FileList) {
            multiPartData.append(key, value[0])
        } else multiPartData.append(key, value)
    })

    let result

    try {
        result = await axios.post(lambdaEndpoint, multiPartData, {
            withCredentials: true,
            crossdomain: true,
            headers: {
                'GF-BASE-URL': baseUrl,
            },
        })
    } catch (err) {
        // Pass back error
        return {
            status: 'error',
            data: err.response,
        }
    }

    return {
        status: 'success',
        data: result,
    }
}
