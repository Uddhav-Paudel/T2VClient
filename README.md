# React Project: Front-End for Text-to-Video Conversion

## Project Overview
This project provides a front-end user interface for creating videos from text input. Users can enter text into an input box at the top of the UI, and the application will process the input to generate a video. The project is designed to offer a seamless and intuitive experience for users looking to convert their ideas into video content.

## Features
- **Text Input**: A simple and user-friendly input box for users to provide the text they want to convert into a video.
- **Video Preview**: Displays the generated video directly in the UI for easy review.
- **Responsive Design**: Ensures the application works well on various devices and screen sizes.
- **Tooltips**: Provides additional information on hover for better usability.

## Backend Integration
The backend for this project handles the text-to-video conversion logic and is available in a separate repository. You can find it here:
[Backend Repository: A2V](https://github.com/Uddhav-Paudel/A2V.git)

## How It Works
1. Users enter text into the input box at the top of the UI.
2. The front-end sends the text to the backend API for processing.
3. The backend generates a video based on the input text and returns it to the front-end.
4. The generated video is displayed in the UI for the user to view.

## Environment Variables
To configure the project, you need to set up environment variables in a `.env` file at the root of the project. Below is an example of the required variables:

```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
REACT_APP_API_KEY=your-api-key
REACT_APP_YOUTUBE_API_KEY=your-youtube-api-key
REACT_APP_YOUTUBE_CHANNEL_ID=your-youtube-channel-id
```

### Steps to Add `.env` File
1. Create a `.env` file in the root directory of the project.
2. Add the required variables as shown above.
3. Replace `https://your-backend-url.com` with the actual backend URL (e.g., from [A2V backend](https://github.com/Uddhav-Paudel/A2V.git)).
4. Replace `your-api-key` with the API key if required by the backend.
5. Replace `your-youtube-api-key` with your YouTube Data API key.
6. Replace `your-youtube-channel-id` with the ID of the YouTube channel where videos will be uploaded.

> **Note**: Do not commit the `.env` file to version control to keep sensitive information secure.

## Getting Started
### Prerequisites
- Node.js and npm installed on your system.
- Access to the backend repository: [A2V](https://github.com/Uddhav-Paudel/A2V.git).

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Uddhav-Paudel/react-essential-training.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-essential-training/react-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Backend Setup
Follow the instructions in the [A2V backend repository](https://github.com/Uddhav-Paudel/A2V.git) to set up the backend server.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- [React](https://reactjs.org/) for the front-end framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Font Awesome](https://fontawesome.com/) for icons.

---
Happy coding!
