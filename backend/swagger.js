const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'

const endpointsFiles = ['./src/routes/index.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Professional Challenge",
        description: "Documentation application professional challenge"
    },
    host: "localhost:4000",
    basePath: "/api/v1",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Auth",
            "description": "Endpoints"
        },
        {
            "name": "Professional",
            "description": "Endpoints"
        },
        {
            "name": "TypeProfessional",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "jwt",
        }
    },
    definitions: {
        professional: {
            $name: "Jhon Doe",
            phone: "(99) 9 9999-9999",
            $email: "Jhon@email.com",
            $situation: false,
            $typeProfessionalId: 1,
        },
        typeProfessional: {
            $description: "Professional",
            phone: "(99) 9 9999-9999",
            $situation: false,
        },
        getTypeProfessional: [
            { $ref: "#/definitions/typeProfessional" }
        ],
        oneTypeProfessional: { $ref: "#/definitions/typeProfessional" },
        getProfessional: [
            { $ref: "#/definitions/professional" }
        ],
        oneProfessional: { $ref: "#/definitions/professional" }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/server.js')
})
