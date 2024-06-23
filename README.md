# chainxpert-llm Project

## Challenge 4
Project Overview: Generative AI Integration for Prompt-Based Report Delivery

## Overview

The `chainxpert-llm` project integrates OpenAI's GPT-3.5 model with a backend server to facilitate intelligent responses to user queries based on predefined API configurations. This setup allows for dynamic interaction where users can ask questions related to various APIs, and the system responds with relevant information fetched from corresponding endpoints.

The goal of this project is to integrate Generative AI into an accounting platform to enable prompt-based report generation. This system empowers users to create customized reports tailored to their queries efficiently. A key requirement is to ensure strict data privacy and security, allowing each customer access only to their authorized subset of data.

## Features

- **Dynamic Prompt Generation**: Utilizes API configurations defined in `endpoints/apiConfig.js` to dynamically generate prompts informing users about available endpoints and their functionalities.

- **OpenAI Integration**: Integrates seamlessly with OpenAI's GPT-3.5 model to process user queries and generate responses that guide users towards the appropriate API endpoint.

- **Data Retrieval**: Determines the relevant API endpoint based on the user query's context and retrieves data from the specified endpoint hosted on a configured server.

- **Logging and History**: Logs user queries, generated prompts, and retrieved data to maintain a history of interactions, aiding in analytics and user behavior analysis.

## Usage

### `/prompt` Route

The `/prompt` route serves as the primary interface for interacting with the system. Here’s how it operates:

1. **Endpoint Configuration**: Fetches API configurations from `endpoints/apiConfig.js`, which defines various APIs with names, descriptions, and endpoints.

2. **Prompt Generation**: Constructs prompts dynamically based on the user query and available API descriptions. This informs users about which endpoints to use for their specific needs.

3. **User Query Processing**: When a user submits a query to the `/prompt` route, the system combines the query with an instruction to find the suitable API endpoint.

4. **OpenAI Processing**: Uses OpenAI's API (`openai.chat.completions.create`) to process user queries and generate responses. This involves a blend of predefined prompts and user input to determine the most appropriate API endpoint.

5. **Data Retrieval**: Once the relevant endpoint is identified from the OpenAI response, the system retrieves data from the corresponding server endpoint (`process.env.SERVER_ENDPOINT + endpointRequired`).

6. **Response**: Returns the retrieved data along with a topic derived from the user query, offering comprehensive information tailored to the user's original request.

### Environment Variables

Ensure the following environment variables are configured:

- `OPENAI_API_KEY`: API key for OpenAI.
- `SERVER_ENDPOINT`: Base URL for the server hosting the endpoints.

