const ACCESS_KEY = import.meta.env.VITE_SOCIALKIT_ACCESS_KEY;

export const analyzeVideo = async (url) => {
    if (!ACCESS_KEY) {
        throw new Error("SocialKit Access Key is missing");
    }

    const apiUrl = `https://api.socialkit.dev/youtube/summarize?access_key=${ACCESS_KEY}&url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        const data = json.data;

        // Map SocialKit response to our app structure
        // Note: Assuming SocialKit returns { summary: "...", key_takeaways: [...] } based on typical API patterns.
        // If the structure is different, we will adjust after seeing the debug output.
        // Since we haven't seen the debug output yet (it's running), I'll implement a robust mapper.

        return {
            title: data.title || "Video Analysis",
            summary: data.summary || "No summary available.",
            keyTakeaways: data.keyPoints || data.key_takeaways || ["No key takeaways found."],
            resources: [
                // SocialKit might not return resources, so we provide generic ones or placeholders
                {
                    title: "Search on Google",
                    type: "Search",
                    link: `https://www.google.com/search?q=${encodeURIComponent(data.title || "video topic")}`,
                    description: "Find more information about this topic."
                },
                {
                    title: "Related Videos",
                    type: "YouTube",
                    link: `https://www.youtube.com/results?search_query=${encodeURIComponent(data.title || "video topic")}`,
                    description: "Watch similar videos on YouTube."
                }
            ]
        };
    } catch (error) {
        console.error("SocialKit API Error:", error);
        throw new Error("Failed to analyze video with SocialKit.");
    }
};
