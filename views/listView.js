class ListView {
  constructor(parentElement, data, headers, caption) {
    this.parentElement = parentElement;
    this.data = data;
    this.headers = headers;
    this.caption = caption;
  }

  clickHandler(subscriber) {
    document.querySelectorAll('tr')
      .forEach((row) => row.addEventListener('click', () => {
        subscriber(row.dataset.id);
      }))
  }

  render() {
    const HTML = `
      <table>
        <caption>${this.caption}</caption>
        <thead>
          ${this.headers.map((header) => {
            return `<th>${header}</th>`
          }).join('')}
        </thead>
        <tbody>
          ${this.data.map((row) => {
            const rowData = row.getDisplayData();
            return `
              <tr data-id=${row.id}>
                ${Object.keys(rowData)
                  .map((key) => {
                    return `<td>${rowData[key]}</td>`
                  }).join('')}
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `
    this.parentElement.insertAdjacentHTML('beforeend', HTML)
  }
}

export default ListView;
