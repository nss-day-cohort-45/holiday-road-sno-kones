export const ParksHTMLConverter = (parks) => {
    return `
        <section class="parks">
            <h1 class="parksName">${parks.fullName}</h1>
            <div class="parksContacts">${parks.contacts}</div>
            <div class="parksAddress">${parks.addresses}</div>
            <div class="parksHours">${parks.operatingHours}</div>
            <div class="parksDescription">${parks.description}</div>
        </section>
    `
}