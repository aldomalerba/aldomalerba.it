const renderProfile = (id: string): void => {
    const container = document.getElementById(id);

    if (!container) {
        console.warn(`Element with id "${id}" not found`);
        return;
    }
};

renderProfile('json-profile')