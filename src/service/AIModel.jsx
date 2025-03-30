import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a possible Las Vegas itinerary for a couple on a budget, focusing on free and affordable activities, and economical hotel options. I've provided the information in JSON format as requested.\n\n```json\n{\n  \"tripName\": \"Las Vegas Budget Getaway: 3 Days for Couples\",\n  \"budget\": \"Cheap/Budget-Friendly\",\n  \"location\": \"Las Vegas, Nevada\",\n  \"duration\": \"3 Days\",\n  \"travelers\": \"Couple\",\n  \"currency\": \"USD\",\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"Approximately $30 - $80 per night (depending on season and availability)\",\n      \"hotelImageURL\": \"https://www.circuscircus.com/wp-content/uploads/2023/08/CCLV-Exterior-1920x1080-min.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1260,\n        \"longitude\": -115.1656\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic, budget-friendly option on the Strip. Features a circus with free acts, a large amusement park (Adventuredome), and various dining options.  Rooms are basic but clean.\"\n    },\n    {\n      \"hotelName\": \"Stratosphere Hotel, Casino & Tower\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"Approximately $40 - $90 per night (depending on season and availability)\",\n      \"hotelImageURL\": \"https://www.thestrat.com/wp-content/uploads/2024/01/STRAT_EXT_Night_1920x1080_1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1474,\n        \"longitude\": -115.1559\n      },\n      \"rating\": 3.7,\n      \"description\": \"Located at the north end of the Strip, offering great views from the tower.  Rooms are decent, and the price is often lower than mid-Strip hotels. Has thrill rides at the top of the tower (extra cost).\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"Approximately $45 - $95 per night (depending on season and availability)\",\n      \"hotelImageURL\": \"https://www.excalibur.com/content/dam/excalibur/page-headers/exterior/excalibur-hotel-casino-exterior-night-1280x683.adapt.1900.1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0984,\n        \"longitude\": -115.1744\n      },\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel with affordable rooms, a good location on the south end of the Strip, and various dining and entertainment options. Connected to Luxor and Mandalay Bay by walkways.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"South Strip Exploration & Free Attractions\",\n      \"bestTimeToVisit\": \"Morning & Evening (to avoid midday heat)\",\n      \"activities\": [\n        {\n          \"placeName\": \"Welcome to Las Vegas Sign\",\n          \"placeDetails\": \"Iconic sign for photo opportunities.  Can be crowded, especially during peak hours.\",\n          \"placeImageURL\": \"https://www.lasvegasnevada.gov/wp-content/uploads/2024/03/Welcome-Sign-Feature-compressed.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0829,\n            \"longitude\": -115.1735\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (10-20 minutes by car/ride-share from Strip hotels)\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Stunning seasonal displays of flowers and plants.  Free to enter.\",\n          \"placeImageURL\": \"https://bellagio.mgmresorts.com/content/dam/MGM/bellagio/entertainment/conservatory-botanical-garden/bellagio-conservatory-chinese-new-year-display-1280x560.adapt.1900.1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1744\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (walkable from many Strip hotels)\"\n        },\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Spectacular water show synchronized to music. Runs frequently, especially in the evening.\",\n          \"placeImageURL\": \"https://bellagio.mgmresorts.com/content/dam/MGM/bellagio/entertainment/fountains-of-bellagio/bellagio-fountains-night-1280x560.adapt.1900.1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1744\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.9,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (walkable from many Strip hotels)\"\n        },\n        {\n          \"placeName\": \"Walk the Las Vegas Strip (South)\",\n          \"placeDetails\": \"Explore the themed hotels (Luxor, Excalibur, Mandalay Bay), window shop, and soak in the atmosphere. People-watching is a must!\",\n          \"placeImageURL\": \"https://i.insider.com/60417c0122332b00189f167e?width=700\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0905,\n            \"longitude\": -115.1747\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location. South end of the strip.\"\n        },\n        {\n          \"placeName\": \"Luxor Hotel Light Beam\",\n          \"placeDetails\": \"The strongest beam of light in the world, seen from anywhere in the city!\",\n          \"placeImageURL\": \"https://a.cdn-hotels.com/gdcs/production180/d1716/9a7a1310-2356-4f35-88e1-d9160d968e03.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0955,\n            \"longitude\": -115.1757\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.3,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (walkable from many Strip hotels)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown Las Vegas (Fremont Street) & Budget Eats\",\n      \"bestTimeToVisit\": \"Evening/Night for Fremont Street Experience\",\n      \"activities\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a massive LED canopy displaying light shows and music.  Free to walk around.\",\n          \"placeImageURL\": \"https://vegasexperience.com/wp-content/uploads/2017/09/fremont-street-experience-marquee-1280x640.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1701,\n            \"longitude\": -115.1421\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (approx. 20-30 minutes by car/ride-share from the Strip). Consider using the Deuce bus for a cheaper option.\"\n        },\n        {\n          \"placeName\": \"Downtown Container Park\",\n          \"placeDetails\": \"Shopping, dining, and entertainment complex built from repurposed shipping containers. Has a playground for kids, but still interesting for adults.\",\n          \"placeImageURL\": \"https://downtowncontainerpark.com/wp-content/uploads/2023/12/DCP_12-23_Holiday_Lights-147-scaled.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1687,\n            \"longitude\": -115.1400\n          },\n          \"ticketPricing\": \"Free entry (individual vendor prices vary)\",\n          \"rating\": 4.3,\n          \"travelTimeFromHotel\": \"Walkable from Fremont Street.\"\n        },\n        {\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"Famous (or infamous) restaurant with outrageously unhealthy burgers and a hospital theme.  Photo op even if you don't eat there.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Heart_Attack_Grill_Las_Vegas_01.jpg/640px-Heart_Attack_Grill_Las_Vegas_01.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1708,\n            \"longitude\": -115.1413\n          },\n          \"ticketPricing\": \"Entrees $15-$30\",\n          \"rating\": 3.5,\n          \"travelTimeFromHotel\": \"Walkable from Fremont Street.\"\n        },\n         {\n          \"placeName\": \"Take a picture with Million Dollar Display\",\n          \"placeDetails\": \"Binion's Gambling Hall showcases $1 million dollars in cash!\",\n          \"placeImageURL\": \"https://assets.atlasobscura.com/media/W1siZiIsImltYWdlcy81MTA0ODc2MDU0MWQ2ODNmMDYwMGJiNjgvYmluaW9uc18xXzdfbWlsbGlvbl80XzY0MC5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItc3RyaXAiXSxbInAiLCJvcHRpbWl6ZSJdXQ/binions_1_7_million_4_640.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1701,\n            \"longitude\": -115.1433\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"travelTimeFromHotel\": \"Walkable from Fremont Street.\"\n        },\n        {\n          \"placeName\": \"Eat Cheap!\",\n          \"placeDetails\": \"Find affordable meals at In-N-Out Burger (a bit off-Strip, but worth it for West Coast experience), food courts, or by taking advantage of happy hour deals.\",\n          \"placeImageURL\": \"https://locations.in-n-out.com/Content/Locations/INOUT_Location_LasVegas_NV_2.jpeg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0700,\n            \"longitude\": -115.1500\n          },\n          \"ticketPricing\": \"Varies (In-N-Out Burgers around $5-8)\",\n          \"rating\": 4.6,\n          \"travelTimeFromHotel\": \"Variable, depending on chosen restaurant.\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Mid-Strip Sightseeing & Ethel M Chocolate Factory\",\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"activities\": [\n        {\n          \"placeName\": \"The LINQ Promenade & High Roller Observation Wheel (Optional)\",\n          \"placeDetails\": \"Outdoor shopping, dining, and entertainment area.  The High Roller offers amazing views but is a paid attraction. Walk around the Promenade for free.\",\n          \"placeImageURL\": \"https://www.caesars.com/content/dam/clv/Venues/Entertainment/High-Roller/clv-entertainment-highroller-exterior-night-1920x672.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1162,\n            \"longitude\": -115.1705\n          },\n          \"ticketPricing\": \"High Roller: $25-$40 (depending on time of day); Promenade: Free to walk around\",\n          \"rating\": 4.4,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (walkable from many Strip hotels)\"\n        },\n        {\n          \"placeName\": \"Mirage Volcano\",\n          \"placeDetails\": \"Free volcano show in front of the Mirage Hotel. Erupts several times nightly.\",\n          \"placeImageURL\": \"https://www.casino.org/news/wp-content/uploads/2023/11/mirage-volcano-show-las-vegas-1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1212,\n            \"longitude\": -115.1751\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.6,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (walkable from many Strip hotels)\"\n        },\n        {\n          \"placeName\": \"Ethel M Chocolate Factory & Cactus Garden\",\n          \"placeDetails\": \"Free tour of the chocolate factory and a beautiful cactus garden to explore. Located a bit outside the Strip, requires transportation.\",\n          \"placeImageURL\": \"https://cdn.dtknow.com/uploads/stores/img/543/detail_images/1709496175Ethel-M-Chocolates_Garden-web.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0593,\n            \"longitude\": -115.0630\n          },\n          \"ticketPricing\": \"Free (chocolate tasting might have a small fee)\",\n          \"rating\": 4.7,\n          \"travelTimeFromHotel\": \"Variable, depending on hotel location (approx. 20-30 minutes by car/ride-share from the Strip)\"\n        },\n        {\n          \"placeName\": \"People watching on Strip\",\n          \"placeDetails\": \"Enjoying the vibe of las vegas strip\",\n          \"placeImageURL\": \"https://www.travelandleisure.com/thmb/4Y6q6-H-qKAf4G0p7d3tA4q_sA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/las-vegas-strip-walking-VEGAS0617-f8c2e1d516b24632b39c563f60cd6137.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1728\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n          \"travelTimeFromHotel\": \"From hotel Location\"\n        }\n      ]\n    }\n  },\n  \"notes\": [\n    \"Prices are estimates and can vary significantly depending on the time of year, day of the week, and availability.\",\n    \"Consider purchasing a day pass for the Deuce bus for affordable transportation on the Strip and Downtown.\",\n    \"Take advantage of free activities like walking the Strip, watching the Bellagio fountains, and visiting the Bellagio Conservatory.\",\n    \"Look for happy hour deals and affordable dining options to save money on food.\",\n    \"Wear comfortable shoes, as you'll be doing a lot of walking.\",\n    \"Stay hydrated, especially during the hot summer months.\",\n    \"Be aware of your surroundings and take precautions against pickpockets.\",\n    \"Most importantly, have fun!\"\n  ]\n}\n```\n\n**Explanation of Key Elements:**\n\n*   **`hotelOptions`:** Provides a few budget-friendly hotel choices with key details to help you decide.  I've focused on hotels that are generally well-regarded for their price point and location. Prices are approximate.  Always check current prices online.\n*   **`itinerary.day1`, `itinerary.day2`, `itinerary.day3`:**  Detailed daily plans with suggested activities.\n    *   **`placeName`:** The name of the attraction.\n    *   **`placeDetails`:** A brief description of the attraction.\n    *   **`placeImageURL`:**  A URL for an image of the attraction.\n    *   **`geoCoordinates`:**  Latitude and longitude for mapping.\n    *   **`ticketPricing`:**  Indicates the cost of entry (if any).\n    *   **`rating`:** An estimated rating (out of 5) based on general reviews.\n    *   **`travelTimeFromHotel`:** An *estimated* travel time from a central Strip location. This can vary significantly!\n*   **`notes`:**  Important tips and reminders for a budget-conscious trip.\n\n**How to Use This Plan:**\n\n1.  **Hotel Booking:**  Research the hotel options further on sites like Booking.com, Expedia, or directly on the hotel's website to compare prices and read reviews.  Book in advance, especially if traveling during peak season.\n2.  **Transportation:** Consider using ride-sharing services (Uber/Lyft), but be aware that prices can surge. The Deuce bus is a very affordable option for getting around the Strip and to Fremont Street. Walking is also a great way to see the sights.\n3.  **Flexibility:** This is a suggested itinerary.  Feel free to adjust it based on your interests and energy levels.\n4.  **Check Show Schedules:**  For free shows like the Bellagio Fountains and Mirage Volcano, confirm the show times in advance on the hotel's website.\n5.  **Enjoy the Freebies:**  Las Vegas offers many free attractions.  Take advantage of them!\n6.  **Budget for Food:**  Factor in the cost of meals and snacks.  Look for affordable options and take advantage of happy hour deals.\n7.  **Stay Safe:** Be aware of your surroundings, especially at night.\n\nRemember to adjust the itinerary and hotel choice based on your specific preferences and budget. Have a fantastic trip to Las Vegas!\n"},
          ],
        },
      ],
    });
  



