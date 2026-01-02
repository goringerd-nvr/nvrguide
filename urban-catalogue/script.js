// Initial Data (Prague Spots)
const defaultPlaces = [
    {
        "name": "NeverEnough",
        "address": "Náměstí Jiřího z Poděbrad 18",
        "category": "Shop",
        "rating": 3,
        "comment": "Our HQ.",
        "lat": 50.0776174,
        "lng": 14.4523512
    },
    {
        "name": "Fermé",
        "address": "Lucemburská 1492/27, Praha 3",
        "category": "Bar",
        "rating": 2,
        "comment": "příjemnej bar a super jídlo. ",
        "lat": 50.0789574,
        "lng": 14.4544201
    },
    {
        "name": "Bukowski's",
        "lat": 50.0829988,
        "lng": 14.4487842,
        "category": "Bar",
        "address": "Bořivojova 689/86",
        "rating": 3,
        "comment": "Classic."
    },
    {
        "name": "CAFEFIN",
        "lat": 50.0781042,
        "lng": 14.4484106,
        "category": "Cafe",
        "address": "nám. J. z Poděbrad 1407/4",
        "rating": 3,
        "comment": "Hipster central."
    },
    {
        "name": "Le Caveau Bakery",
        "lat": 50.0785822,
        "lng": 14.4499728,
        "category": "Bakery",
        "address": "nám. J. z Poděbrad 1561/9",
        "rating": 3,
        "comment": ""
    },
    {
        "name": "BeerGeek Bar",
        "lat": 50.0770861,
        "lng": 14.4500183,
        "category": "Bar",
        "address": "Vinohradská 62",
        "rating": 3,
        "comment": "Craft beer heaven."
    },
    {
        "name": "Stalin",
        "address": "Letná Park",
        "category": "Spot",
        "rating": 1,
        "comment": "Views & Skate.",
        "lat": 50.094827,
        "lng": 14.416105
    },
    {
        "name": "Bike Jesus",
        "address": "Ostrov Štvanice 1125",
        "category": "Club",
        "rating": 3,
        "comment": "jeden z nejlepších klubů",
        "lat": 50.0963,
        "lng": 14.4415
    },
    {
        "name": "Twist bar",
        "address": "Vlkova 26, Praha 3",
        "category": "Bar",
        "rating": 3,
        "comment": "DJs, drinks, pohoda. ",
        "lat": 50.0833603,
        "lng": 14.446856
    },
    {
        "name": "Sandokan Vegan Bistro",
        "address": "Korunní 1172/81, 130 00 Vinohrady",
        "category": "Food",
        "rating": 3,
        "comment": "Nejlepší vegan jídlo v okolí a skvělej pan šéf!",
        "lat": 50.0754995,
        "lng": 14.4514912
    },
    {
        "name": "Blumery",
        "address": "Náměstí Jiřího z Poděbrad 17, Praha 3",
        "category": "Cafe",
        "rating": 1,
        "comment": "Naši sousedé, skvělá káva, drinky a jídlo. ",
        "lat": 50.0778097,
        "lng": 14.4522679
    },
    {
        "name": "Ankali",
        "address": "Lopuchová 58 /6, 101 00 Praha 10-Vršovice",
        "category": "Club",
        "rating": 3,
        "comment": "skvělý alternativní klub",
        "lat": 50.0638256,
        "lng": 14.4570935
    },
    {
        "name": "KRO kitchen",
        "address": "Vinohradská 66",
        "category": "Food",
        "rating": 3,
        "comment": "Kuřecí kamarádi",
        "lat": 50.0771222,
        "lng": 14.4507504
    },
    {
        "name": "Pho Vietnam Tuan & Lan",
        "address": "Slavíkova 1, Hlavní město Praha",
        "category": "Food",
        "rating": 2,
        "comment": "Skvělé PHO, cash only. ",
        "lat": 50.0784475,
        "lng": 14.4482664
    },
    {
        "name": "Roma Uno",
        "address": "Jagellonská 1634/16, Hlavní město Praha",
        "category": "Bar",
        "rating": 1,
        "comment": "All night long Pizza, afterparty jak vyšitá. :)",
        "lat": 50.0794822,
        "lng": 14.4537419
    },
    {
        "name": "U Dolejších",
        "address": "Lucemburská, Hlavní město Praha",
        "category": "Food",
        "rating": 1,
        "comment": "řeznictví, nejlepší mortadela a šunka. ",
        "lat": 50.0785273,
        "lng": 14.4520079
    },
    {
        "name": "U Tellerů",
        "address": "Vinohradská 78, Hlavní město Praha",
        "category": "Food",
        "rating": 2,
        "comment": "Nejlepší obědy",
        "lat": 50.0771791,
        "lng": 14.4521443
    },
    {
        "name": "Kus Koláče",
        "address": "Korunní, Hlavní město Praha",
        "category": "Food",
        "rating": 3,
        "comment": "top koláče",
        "lat": 50.0752846,
        "lng": 14.4533386
    },
    {
        "name": "Coffee Room",
        "address": "Korunní 1208/, Hlavní město Praha",
        "category": "Cafe",
        "rating": 2,
        "comment": "skvělá káva",
        "lat": 50.0752458,
        "lng": 14.4512934
    },
    {
        "name": "Hostinec v Lucemburské",
        "address": "Lucemburská, Hlavní město Praha",
        "category": "Bar",
        "rating": 2,
        "comment": "správná 4ka, malej panák za 18 Kč. :)",
        "lat": 50.0790337,
        "lng": 14.4560633
    },
    {
        "name": "Na Schůdku",
        "address": "Polská 1532/48, Hlavní město Praha",
        "category": "Club",
        "rating": 3,
        "comment": "Skvělá Plzeň, hlavně v létě.",
        "lat": 50.0784666,
        "lng": 14.4457386
    },
    {
        "name": "Hospoda U Benyho",
        "address": "Budečská 1168, 120 00 Vinohrady",
        "category": "Bar",
        "rating": 3,
        "comment": "skvělá hospoda.",
        "lat": 50.0775785,
        "lng": 14.4421492
    },
    {
        "name": "Výčep",
        "address": "Korunní, Hlavní město Praha",
        "category": "Food",
        "rating": 2,
        "comment": "Skvělé lokální obědy. Dražší. ",
        "lat": 50.0752577,
        "lng": 14.4536258
    },
    {
        "name": "U Kruhu",
        "address": "Palackého, Hlavní město Praha",
        "category": "Bar",
        "rating": 3,
        "comment": "supr hospoda",
        "lat": 50.0809011,
        "lng": 14.4232637
    },
    {
        "name": "Never Enough Old Town",
        "address": "Celetná 12, Praha 1",
        "category": "Shop",
        "rating": 3,
        "comment": "naše pobočka na starém městě.",
        "lat": 50.0869425,
        "lng": 14.4232246
    }
];

// Load from LocalStorage or use Default
let places = JSON.parse(localStorage.getItem('prague_places')) || defaultPlaces;

const map = L.map('map', { zoomControl: false }).setView([50.08, 14.44], 14); // Center on Prague Vinohrady/Žižkov
L.control.zoom({ position: 'topright' }).addTo(map);

// Dark Matter Tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background-color: #fff; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px rgba(255,255,255,0.5);"></div>',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [0, -10]
});

const listContainer = document.getElementById('places-list');
let markers = [];
let editingIndex = -1; // -1 means adding new

function getSkullRating(count) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += '<img src="assets/skull_icon.png" class="skull-rating-icon" alt="skull">';
    }
    return html;
}

function render() {
    listContainer.innerHTML = '';
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    places.forEach((place, index) => {
        // Marker
        const marker = L.marker([place.lat, place.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div class="popup-header">
                    <div class="popup-title">${place.name}</div>
                    <div class="popup-nav-btn" onclick="navigateTo(${place.lat}, ${place.lng})" title="Navigate" style="cursor: pointer;">➔</div>
                </div>
                <div class="popup-cat">${place.category}</div>
                <div style="font-size:0.8em; margin-top:4px; opacity:0.7;">${place.address}</div>
            `)
            .bindTooltip(place.name, {
                permanent: true,
                direction: 'top',
                offset: [0, -10],
                className: 'map-label'
            });
        markers.push(marker);

        // List Item
        const item = document.createElement('div');
        item.className = 'place-item';

        item.innerHTML = `
            <div class="place-info" onclick="flyToPlace(${index})">
                <div class="place-name">${place.name} <span class="rating-skulls">${getSkullRating(place.rating)}</span></div>
                <div class="place-meta">
                    <span>${place.category}</span>
                </div>
                ${place.comment ? `<div class="place-comment">"${place.comment}"</div>` : ''}
                <div class="action-buttons">
                    <button class="edit-btn" onclick="openEditModal(${index}); event.stopPropagation();">Edit</button>
                    <button class="delete-btn" onclick="deletePlace(${index}); event.stopPropagation();">Delete</button>
                </div>
            </div>
            <button class="nav-btn" onclick="navigateTo(${place.lat}, ${place.lng})" title="Navigate">Go ➔</button>
        `;

        listContainer.appendChild(item);

        // Click Marker
        marker.on('click', () => {
            // 1. Desktop: Highlight list
            document.querySelectorAll('.place-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // 2. Mobile: Open Sheet
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.add('expanded');
            }
        });
    });
}

// Label Visibility based on Zoom
function updateLabels() {
    const zoom = map.getZoom();
    if (zoom >= 15) {
        document.body.classList.add('show-labels');
    } else {
        document.body.classList.remove('show-labels');
    }
}
map.on('zoomend', updateLabels);
updateLabels(); // Initial check

// Geolocation (Blue Dot)
map.locate({ setView: false, watch: true, maxZoom: 16, enableHighAccuracy: true });

const userIcon = L.divIcon({
    className: 'user-marker',
    html: '<div class="pulsating-circle"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

let userMarker = null;
let userLat = null;
let userLng = null;

map.on('locationfound', (e) => {
    userLat = e.latlng.lat;
    userLng = e.latlng.lng;

    if (!userMarker) {
        userMarker = L.marker(e.latlng, { icon: userIcon }).addTo(map);
        userMarker.bindPopup("You are here");
    } else {
        userMarker.setLatLng(e.latlng);
    }
});

map.on('locationerror', (e) => {
    console.log("Location access denied or error:", e.message);
});

// Dynamic Navigation Helper
window.navigateTo = function (lat, lng) {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

    // If we have precise location, use it as origin
    if (userLat && userLng) {
        url += `&origin=${userLat},${userLng}`;
    }

    window.open(url, '_blank');
};

// Mobile Sheet Logic
const sidebar = document.querySelector('.sidebar');
// Create Handle
const handle = document.createElement('div');
handle.className = 'sheet-handle';
handle.innerHTML = '<div class="handle-bar"></div>';
// Check if handle already exists to avoid dupes on re-run (though render clears list, handle is outside list)
if (!sidebar.querySelector('.sheet-handle')) {
    sidebar.insertBefore(handle, sidebar.firstChild);
}

// Toggle/Swipe Logic
let startY = 0;
let isDragging = false;

handle.addEventListener('click', () => {
    if (!isDragging) sidebar.classList.toggle('expanded');
});

handle.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = false;
});

handle.addEventListener('touchmove', (e) => {
    // If checking drag distance
    if (Math.abs(e.touches[0].clientY - startY) > 5) {
        isDragging = true;
    }
});

handle.addEventListener('touchend', (e) => {
    if (isDragging) {
        const endY = e.changedTouches[0].clientY;
        const diff = startY - endY;

        // Swipe Up (positive diff) -> Expand
        if (diff > 30) {
            sidebar.classList.add('expanded');
        }
        // Swipe Down (negative diff) -> Collapse
        else if (diff < -30) {
            sidebar.classList.remove('expanded');
        }
        // If drag was small, treat as toggle or no-op? 
        // We let 'click' handle tap, so here we only handle significant swipes.

        // Reset drag flag shortly after to prevent 'click' firing if browser decides to fire it
        setTimeout(() => { isDragging = false; }, 100);
    }
});

// Map Click collapses sheet
map.on('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('expanded');
    }
});

function flyToPlace(index) {
    const place = places[index];
    document.querySelectorAll('.place-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.place-item')[index].classList.add('active');
    map.flyTo([place.lat, place.lng], 16, { animate: true, duration: 1.2 });
    markers[index].openPopup();
}

function deletePlace(index) {
    if (confirm('Are you sure you want to delete ' + places[index].name + '?')) {
        places.splice(index, 1);
        localStorage.setItem('prague_places', JSON.stringify(places));
        render(); // Immediate re-render
    }
}

// Modal Logic
const modal = document.getElementById('add-modal');
const form = document.getElementById('add-form');
const modalTitle = document.getElementById('modal-title');
const saveBtn = document.getElementById('save-btn');

document.getElementById('add-btn').onclick = () => {
    editingIndex = -1;
    modalTitle.innerText = "Add New Spot";
    form.reset();
    saveBtn.innerText = "Save Spot";
    modal.classList.remove('hidden');
};

document.getElementById('cancel-btn').onclick = () => modal.classList.add('hidden');

// Global scope for HTML onclick
window.openEditModal = function (index) {
    editingIndex = index;
    const place = places[index];

    modalTitle.innerText = "Edit Spot";
    document.getElementById('input-name').value = place.name;
    document.getElementById('input-address').value = place.address;
    document.getElementById('input-category').value = place.category;
    document.getElementById('input-rating').value = place.rating;
    document.getElementById('input-comment').value = place.comment || "";

    saveBtn.innerText = "Update Spot";
    modal.classList.remove('hidden');
};

window.deletePlace = deletePlace;
window.flyToPlace = flyToPlace;
window.openEditModal = openEditModal; // Ensure it's available

// Autocomplete Logic (Name-based)
const nameInput = document.getElementById('input-name');
const addressInput = document.getElementById('input-address');
const suggestionsBox = document.getElementById('suggestions');
let debounceTimer;
let selectedLocation = null; // Store {lat, lng, display_name}

nameInput.addEventListener('input', (e) => {
    const query = e.target.value;
    clearTimeout(debounceTimer);

    if (query.length < 3) {
        suggestionsBox.innerHTML = '';
        suggestionsBox.classList.add('hidden');
        return;
    }

    debounceTimer = setTimeout(async () => {
        try {
            // Search Nominatim, simple query text + 'Prague'
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + " Prague")}&limit=5&addressdetails=1`);
            const data = await res.json();

            suggestionsBox.innerHTML = '';
            if (data.length > 0) {
                suggestionsBox.classList.remove('hidden');
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';

                    // Construct readable address
                    const addr = item.address;
                    const name = item.name || addr.house_name || item.display_name.split(',')[0];
                    let street = [addr.road, addr.house_number].filter(Boolean).join(' ');
                    if (!street) street = addr.suburb || addr.city_district || '';
                    const city = addr.city || addr.town || addr.village || 'Prague';
                    const fullAddrStr = [street, city].filter(Boolean).join(', ');

                    div.innerHTML = `<span class="sugg-name">${name}</span><span class="sugg-addr">${fullAddrStr}</span>`;

                    div.onclick = () => {
                        // 1. Fill Name
                        nameInput.value = name;

                        // 2. Fill Address
                        addressInput.value = fullAddrStr;

                        selectedLocation = {
                            lat: parseFloat(item.lat),
                            lng: parseFloat(item.lon),
                            fullAddress: fullAddrStr
                        };

                        suggestionsBox.classList.add('hidden');
                    };
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.classList.add('hidden');
            }
        } catch (err) {
            console.error('Autocomplete error', err);
        }
    }, 300);
});

// Close suggestions on click outside
document.addEventListener('click', (e) => {
    if (e.target !== nameInput && e.target !== suggestionsBox) {
        suggestionsBox.classList.add('hidden');
    }
});

saveBtn.onclick = async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const address = addressInput.value;
    const category = document.getElementById('input-category').value;
    const rating = parseInt(document.getElementById('input-rating').value);
    const comment = document.getElementById('input-comment').value;

    if (!name || !address) return alert('Name and address required.');

    let lat, lng;

    // Logic: 
    // 1. If we used Autocomplete (selectedLocation exists AND address matches), use that.
    // 2. If editing and address is same as old, use old coords.
    // 3. Otherwise, search Nominatim (fallback).

    if (selectedLocation && address.includes(selectedLocation.fullAddress.split(',')[0])) { // Changed from display_name to fullAddress
        // Matches autocomplete
        lat = selectedLocation.lat;
        lng = selectedLocation.lng;
    } else if (editingIndex > -1 && places[editingIndex].address === address) {
        lat = places[editingIndex].lat;
        lng = places[editingIndex].lng;
    } else {
        saveBtn.innerText = 'Searching...';
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ", Prague")}&limit=1`);
            const data = await res.json();
            if (!data || data.length === 0) {
                alert('Address not found. Please try again.');
                saveBtn.innerText = (editingIndex > -1) ? 'Update Spot' : 'Save Spot';
                return;
            }
            lat = parseFloat(data[0].lat);
            lng = parseFloat(data[0].lon);
        } catch (err) {
            alert('Error finding location.');
            return;
        }
    }

    const info = { name, address, category, rating, comment, lat, lng };

    if (editingIndex > -1) {
        places[editingIndex] = info;
    } else {
        places.push(info);
    }

    localStorage.setItem('prague_places', JSON.stringify(places));
    render();

    map.flyTo([lat, lng], 16, { animate: true });

    modal.classList.add('hidden');
    form.reset();
    selectedLocation = null;
    saveBtn.innerText = (editingIndex > -1) ? 'Update Spot' : 'Save Spot';

    // Feedback - removed as per user request
    // alert('Spot Saved...');
};

// Data Management
const dataModal = document.getElementById('data-modal');
document.getElementById('data-btn').onclick = () => dataModal.classList.remove('hidden');
document.getElementById('close-data-btn').onclick = () => dataModal.classList.add('hidden');

// Export
document.getElementById('export-btn').onclick = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(places, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "prague_places.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

// Import
document.getElementById('import-input').onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const loadedPlaces = JSON.parse(event.target.result);
            if (Array.isArray(loadedPlaces)) {
                if (confirm(`Load ${loadedPlaces.length} places? This will overwrite current data.`)) {
                    places = loadedPlaces;
                    localStorage.setItem('prague_places', JSON.stringify(places));
                    render();
                    dataModal.classList.add('hidden');
                    alert('Data loaded successfully!');
                }
            } else {
                alert('Invalid file format.');
            }
        } catch (err) {
            alert('Error reading file.');
        }
    };
    reader.readAsText(file);
};

// Initial Render
render();
