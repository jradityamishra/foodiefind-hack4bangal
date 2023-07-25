
    const stall1 = {
        // stall_id: "stall_randomString",
        stallName: "Rohit Chaiwala",
        owner: "owner_id",
        ownerName: "Rohit",
        isVerified: true, // optional
        address: "123, ABC Road, XYZ City",
        contact: "1234567890",
        rating: 4.5,
        userCount: 100, // optional
        menu: ["menu_id1", "menu_id2", "menu_id3"],
        photos: ["image_url1", "image_url2", "image_url3"], // optional
        openTime: "10:00",
        closeTime: "22:00",
        location: [22.512201, 88.402208], // from location picker
        reviews: ["review_id1", "review_id2", "review_id3"], // populated form reviews_schema.js
        gmap_url : "https://goo.gl/maps/...." //optional
    }

    const stores = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.512201, 88.402208
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C."
            }
          }
        ]
      };
