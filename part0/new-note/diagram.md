```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Enters note text and clicks on submit button
    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note {"note": "note text"}
    deactivate browser
    activate server
    server->>browser: 302 Found https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server
    activate browser
    Note left of server: Server stores note to serve it next time notes are requested.
    browser->>user: Refreshes the page so the user can see the new note.
    deactivate browser
```