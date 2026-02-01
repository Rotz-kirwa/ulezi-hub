function Insurance() {
  const insuranceProviders = [
    { name: 'SHA', type: 'Social Health Authority', status: 'Accepted' },
    { name: 'Britam', type: 'Private Health Insurance', status: 'Accepted' },
    { name: 'Madison Insurance', type: 'Private Health Insurance', status: 'Accepted' },
    { name: 'Jubilee Insurance', type: 'Private Health Insurance', status: 'Accepted' }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Insurance & Payment Options</h2>
      <p className="section-subtitle">We accept major insurance providers in Kenya</p>

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto 50px', 
        background: 'var(--primary-blue)', 
        color: 'var(--white)', 
        padding: '30px', 
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>💳 SHA Accredited Facility</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
          We are fully accredited by the Social Health Authority (SHA). 
          All maternity, pediatric, and gynecology services are covered under SHA schemes.
        </p>
      </div>

      <div className="services-grid">
        {insuranceProviders.map((provider, index) => (
          <div key={index} className="service-card">
            <div className="service-image-full">
              {provider.name === 'SHA' ? (
              <img 
                src="https://www.dropbox.com/scl/fi/nlsefiim7ppu1cawtv190/sha.png?rlkey=pcpwdktqhxg1mla7p6w7nxp8n&st=y2kh4n4b&raw=1" 
                alt="SHA Logo" 
                loading="lazy"
              />
            ) : provider.name === 'Jubilee Insurance' ? (
              <img 
                src="https://www.dropbox.com/scl/fi/zbenibof2veozpua6qug5/jubille.png?rlkey=7by3kb6xupofekhhqb7geepq3&st=1vey6gul&raw=1" 
                alt="Jubilee Insurance Logo" 
                loading="lazy"
              />
            ) : provider.name === 'Madison Insurance' ? (
              <img 
                src="https://www.dropbox.com/scl/fi/31wexd9y6j1tlo4dijbn7/madison.png?rlkey=k9r85h15jvdnk7ay4az9my7ex&st=rzoxaiwh&raw=1" 
                alt="Madison Insurance Logo" 
                loading="lazy"
              />
            ) : provider.name === 'Britam' ? (
              <img 
                src="https://www.dropbox.com/scl/fi/cucd2kzh3dd8vlxjjpjr0/britam.png?rlkey=m1a0hn6uziqfqatz8d4fc5xtr&st=ja0eydrn&raw=1" 
                alt="Britam Logo" 
                loading="lazy"
              />
            ) : provider.name === 'AAR Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA0lBMVEX///+ocHGuhoekaWrvAADqAACohIX7//+lW13xAAvuHCT2+vqgOz2idHXm5ubT3d2uQkXwFB7xEBvO1tbs7OyBbGy5UFK9g4SfenvUAAC3eXrAHCHlAAisIyitZmeuXV6vi4yqjo7zAAC2rq6+jo+2vLzEAADFXV/Gvr6vs7OkAADVzs7CdHbDTE/d5uaXYGG+n6B/goKOoKC8qqu9iouwMzaVSUugQ0aXMDKmVFb/9/H/sHL//vz/+vX//Pn/oEz/pFv/zKX/p1//3MH/tnr/0K1uP2tiAAABAklEQVR4AbzQNQKDUBAE0MUd4gnuLnHh/gfDGrzNtO/L7sA/gqDrhuEEuUIUzbDsinJ8Y40KSyhKmy3L7rD9YW5HgFOLZ5AuUyNlRVHZnbbVDZOwxmYTrON6ztkPpH24JeyhWQTLyr6PR3GSetmOHd0VcHabi0VSpFcxzbcsLsBId55yu7vm46m8dgwyKYegM13TttpboR0DJvkUoOy6VfbfeXn7wmgRkVJqob4fzjbBeW6x+LIplykpWI7BMBisBsNqkZo8AKXJsRHAMAgEQeqCBxBG/bfkH0dyrIt25tTg8AioigaF38yy1VbPTNXstHN29yqGnCFzy1F8eYiSIOWuF5WsH4GbGaiEAAAAAElFTkSuQmCC" 
                alt="AAR Insurance Logo" 
                loading="lazy"
              />
            ) : provider.name === 'APA Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAA0lBMVEULTKMNSqMMTJ4NS6ENS6AASKEDSKIAR6EAPp0AQ6GBm8P///8ARJ64yNvU3umuwNjAzuA/aasAPKAwYKnZ4OkAN5wAPJ2/yt/v9PUAN5qitNFUd7Ps8vQnXakAQp5qib0AKJaYrMwlL4fq5OfAucl/KWWFOm9nLnTJx9ZOQIbvjou+KEbEGTTSlZ3/9O/YIzPoAA72v7vvu76ygpe3vtFjjcDRwcm0GUneGSbld3ulX4JzOXqjepdvbJ7Vr7lVMXxZQIVwkbpff7WBnsM8aacLTJ657UWGAAABJUlEQVR4AUXQBWKDMAAAwLinxWHFxtzdHfv/lxaq8eTiYBmgC2AXlj0IEMATYEJdyTiHTLhMCJ9GyRKl0spAKOxs7s18E3g65FsUURTFECapjZN5toezbCE2yPMi1CWDQZqKqtb7jVUZ3WAyUweHR8cnp2c2MbNGZGWla7lCen5xeXV9c3V7d/9w+ZgnahYEnpesUDwtBKP6WQb25fXt7ur94/PzS5+zCRnKOIOJF+0l7kxAvn9+/85p1ogJxSJyW5hW57GXJkxG000DqxFzSKipKJRlGMou5+4jJAechn4JHdK26gfU4jos81aWnWg7Uw+yXaGqnlvch3U+dk2V9y6JtpR96BBAABiFgHLXglMA7ncBA8AhQgSNZCoQGsdV6bKLBP0DpekcG8BtNHEAAAAASUVORK5CYII=" 
                alt="APA Insurance Logo" 
                loading="lazy"
              />
            ) : provider.name === 'Resolution Health' ? (
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0nIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3NTc3NzcvKzc3Nzc3Nzc1NTc3NzctNzc3NzAtNy8vNzc1Nzc3NzYtMTc3Ljc3Nzc3N//AABEIACAAHwMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgMFBwIB/8QALhAAAQMCBAMGBwEAAAAAAAAAAQIDBAARBQYSITFRcRMiQVJhsRQjJEJDwdEH/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACQRAAEDBAICAwEBAAAAAAAAAAEAAgMEERIhIUEiUTKx0eET/9oADAMBAAIRAxEAPwDbXFhI3qKKnlS1vkoYUQnxUDx6UNotyUB778NU0WY4EWdSSobX81JVVVHCcRy70Td8pZzBmRHbqiRQVhJKVqG1yOIr0UNMccnLInrBfBqDhYtJ3UWkBAGyRe6j1oFQxx8WbPfr++lIpRt2vtQv41KBBdaSLG4LZItV01HFCPEcnZ7K5lqnuNymjLmNs4m0W9QEhA7yDtccxVTwGPnpM09Q2UW7QmZ8vCSTOhI+oTu4gfkHMevvRKeox8HaQaqlyP8Aozf2lpmSgDl6Uy6NIB680rnSER4yNbq+AHv0roAMGTtKWdIcW7XeLyZWX5TGBYDpGLSUBx6YsCwTudKQQfKeP72qNrZgZZfiOkZ2VORFF8jsrSVcKylsJEzjld6a98XhXdfWqzrd9oVf7uvP+8XqaqDBi/STmpsjk1XeVsDawaLoSe0kLHzXiN1eg5Cl55zK6/SPFC2McbS1mWNIX/pEJ5DDqmhGsVhBKQdK/GnYHNFI4X7/ABIztcatptxb9X//2Q==" 
                alt="Resolution Health Logo" 
                loading="lazy"
              />
            ) : provider.name === 'CIC Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEVHcEz6whn7whX7wha4PkT5wBX5vxP5wBWsITStJDKwKjqtIzCsIC2sIC2tIS6uJDGtIi+wKzitIS6tIi+tIi+uJDGuJDGtIzBqbS4MAAAAGHRSTlMAT6KVDPX/8TtQGIH3//Klxibj0bthcZI0W+iHAAABDklEQVR4Aa2QhYIdIQwA5670FVkhCfL/f9rL7rnb4DBY+G2urq//BN7h7+VyueId/rnwoxP8DbxCTAeRnKJXBzFzQlnWW9huqrjfDasABD0GamYNV1O3G7bV6YB5Zw84p8BBOpRI92bAC4HshuIXGK8JpONZXvXXBbY7QXhdsM8K71/hVn3vkenJN9W//vibFZobM3AiknkcKMENx+pTjuUl4nRbX2XbA5xkeYXML5Gsyc60Cd1qHlYHxRol0UJrDRWkigJsAeZgy8reZ0eDMlhAampA1qC9WJuxMuYp7MYW/AQDwkYvpaiIMscpCBSb0bC9wGx1lBGV1jRH3SsagJwJIJmjCoEMAgSBwMf8BxaZGQMpabbIAAAAAElFTkSuQmCC" 
                alt="CIC Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'UAP Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEX///////////////////////////9HcEz7/fz////////////////////////////////GEzfUUmrQR2DnoK367PCaysDXXnTKJUXvwMnn89+ZzKH1193B361ssp2Avaiw14/OOlXa7OXM5r3L5NwViXLccYS02M2BwEfrr7rhhpZEoVabzXP34uZLoZDyztWeRG2xAAAAEHRSTlP9FVIxjMbqAPnaM7G3XHkJ0Xq8+gAAATdJREFUKJF90mlzgjAQBuBVgQTPHJrQ0BDCJZ79//+uC4LttOI7w5c8LOxmFgghsyAGBr/CGA3nCEDIchVRhgc/Qafxdoa4DNn/dMXBDmarF9Y73UAQTSCDNcR0EiOAKev7eof4HJ7p36TGFHTELzGmueGRydPKuWrAD84TL6TnXH4yWrZ5mR6zWtEBEy281KLDsm1NkRVVXR8HFIJjtfaIeTtU1u6BSaNFo89n0eG1tGnq1PGe0QHP+9Np3wiBaI1NnVOFGlFrKaWXXaW1eW7xs04pePxT6oRzrxNEY6ypsCFVFeMo2KrQvusWyqtNL05l6jknDuqTfk4c9Hq51Hccs8fbfszp0N0adqSK8freXvwbpNNMIZzcBBbDPJ7EAMh2qjRcAO77a8Wdx43fbdYR/AmNgwUh38M+NVMJIpk6AAAAAElFTkSuQmCC" 
                alt="UAP Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'GA Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAilBMVEX////+/v7d3d28vL+dn6ONjpKJio6IiY2IiY2urrH39/e2trmEhYmBgobR0dLW19d/gISkpafg5uj//Pb/+vHv7+++wcT2t5jtbyTrXQDsZxDxpH/rWgDsYgD54dSVlprJz9L5xqzrVADwmW3u9fjwhUr25t7wjFjr6+j70Lv0o3ruejv/7uH2spDc4eQlO6T+AAABMUlEQVR4AVWSBYKEMAwA04W2QHB3Odf/f+9yNN0uswpDFIAQQtDXzfOlkupEB3BHQBhhjFpZ0ANHgmyYOHXOy6xiMARBgCAXqysxZSUFJNN7nDbEPlhCOjQqln7+T/JQEDmXX0BZgaOuQaA2roG26/thLE2+SGEMScyTVcM0E9O0kCvOqSE4A7WErp8NUwWhSQfr+YPbfsxWPtk+QJqKzy8UaCmlSQc8oRicm17VReJVkuOaJu1b7+x7zDLnhj5cQ58bsmyQR/maWPblatMWvIQIvo6e1DR/N7FiCZLXF8H+NffdD2yZstLuT+GairIUv36snARbQcd6lRjzEcvaHWtnWMLt+ghdJFm09pqBb7rPqbl4niNLE7xmqDUJjbFMQNDV2kgTvQWr0jJvCnN1tKo/m88e70PTmwoAAAAASUVORK5CYII=" 
                alt="GA Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'ICEA LION' ? (
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQvOisBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3NS03Nzc3NzU1NTc3Nzc3Nzc3NzctMjc1ODcyNzgtNTc1NTEtLP/AABEIABwAHAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgIDBQcB/8QAKhAAAgICAAMGBwEAAAAAAAAAAQIDBAARBRIxExQhQXGRQlFSYYHB8CL/xAAZAQACAwEAAAAAAAAAAAAAAAACBAEDBQD/xAAjEQACAQMEAQUAAAAAAAAAAAABAgADERITITFBcQQiMmGh/9oADAMBAAIRAxEAPwDuOdOkGkCjx9h1yCQJ0Hp8Qr3C6RMRJGdPG45WX1GVU66VLgcjruGyFdzCt5dAgPGrVmnRaWnXM829Bf3i/qaj06d0FzLKahmsxiVUvcTN7vNtijyDUIXQDHqenUaB8cw0rV9TOpsTxHWSnjZZrJPLdrTXFZV4hR06so1zxkb0fsRjmbVFLj5p+iU4hSF6Maa0gnrxygaDqG981VbJQYqRY2lPFO89ykFLXbn/AChPw7Ot/jAr56Zw5hJjl7uImz8KmlsdjFIkAmJQ2rTHtJvnyjyGYzenctiDa+1zyfEcFQAXO/0Ixrw1IY5a1bZknVUlk+lANf3rmloBQUXk8+ItqE7nqa0aCONUQaVRoDGwLCwlV5NvLCkSmxXhsxmOeNXQ+OmGA6K4swkhiOJONQg5VAAGEBbYSCZ6Tkzp/9k=" 
                alt="ICEA LION Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'Sanlam' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAflBMVEX///////0AZcQAc8UAZsIvgscAXLwAcMGew9wAcMcAX8ALdcIAY8MAZr+50ugAaL3O4etlnc660eOSuNiQtdh4p9Omx+Dd5+6iwN0AYLj2+/kAXLbg7vKyyt4AXsKw0eTu9vmBr9Valcs4hcVqos+92ecbeMBNjsjI3e2NudV79vFLAAABh0lEQVRIie2S226EIBCGQXEVEUE8rOtiBXFx+/4v2PGQtibbm161ib8xgszHPzCD0KlTp079E+Hfk0r9Diyruvlujo85XNvraz95w91db+Ouryp5TB43b/1LsBNDnzdstTGMRHFmIdqYzdl0qA9y+JotEYNhDa/Dca45Kd20bNIGA8JzbHR0ucSDFJO/xDIPlHH3u0g0n3zGHjH8g9gkaD0NXRUs+ajMqSVpf9OdDyWPHwmfAZwvsnMc5spSokoyQ8xMXULIENFiOU/C0pQlWGs9hOGTQNIsWhy1Vl5IUqOOjAiJCEI1obXWBaXddmStXPYsuZ8iAEswX8BGsAIcYSNDih1EFeWtpXQtiBVw84/gncOqA7BaQTLEkNu4g7sjVIDTugjFelHXILSWUS1YU3P6zABkPk8HFjeWEJkCmAF482vNMwAp34s9OWcNkuNcNrWcoKOslZPUo6sGmPfITAlCtV2DbdG0hT10Dl6HeHs+2wFvL8Y/tfdhAX/t9zr61KlTp/6wPgBYWxw030okmAAAAABJRU5ErkJggg==" 
                alt="Sanlam Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'Occidental Insurance' ? (
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nys3NzcrNys3LTc3NTc3Nzc3NzMtODUrLf/AABEIABwAHAMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAGBQcCAwQA/8QAKhAAAgIBAgQFBAMAAAAAAAAAAQIDBBEFEgAGIVETFDEyQSJhkdEVocH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EACARAQABAgYDAAAAAAAAAAAAAAEAAhEDBBMhMUESYXH/2gAMAwEAAhEDEQA/ALQ5j5w0Xl21DV1Sw6yzLu2xxlti5xubHoPX8HjXrLWa1urcq3JGrTH2b8rnGRjuCOA/Omqcna9qEFzUIdcRo18NpYa+xZEBJwd/X5PUYPXiXm510DVvI1NOtJDDEfbYHhYwNqgFun98IzIuHtzEam6L8nfWh5huxLchnlIc/TmXbn749McM4VdIkWR97hQGbGNx78Cqer6vTqpTir52+wmIk4+3fhnXkMkEbvG0bMoJQ+qntxPkmlGy37vDotBf8hrJQkz6n543Ak1Y0sQxx+IQNjbOo2467j8FLOmz3oqFuzpc1l3Wv5qefTvCdZWjkMqYWI7kBCdSjYJxnr0sprtjCKJMZYjOBn3MP8H44wlv2QkREuCyAk7R3b9DinXpgtA8sgNPm5g8zXoYswadJZsiGxDXVGiiQOERlKYAJCFWx1yR8DMXHf58s1KbaYlpyK0XmWtV40YzMgdgA2zoNwHp6gjOQeFz6jbECuJfqZC3tHZv0OPPft56TkdT6Kvc/bjjHpepvj7n/2Q==" 
                alt="Occidental Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'Liaison Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAoN0AmtsAn90Am9vU7vnX7vnR6/dStOT///8Andz8//8oqeAcpt+Bxup3weji8/rH5vbThHj+AAAATUlEQVR4AezKoQEAEBAAQAAA+09LAqBJf/nQNxhjgi4o40KSW1CFvgVTgiUQILTgqB4swYcRmcMMP4IZglrFITA+S3monmLEBEB5OgEAVUoHrPEvKMEAAAAASUVORK5CYII=" 
                alt="Liaison Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : provider.name === 'Pacis Insurance' ? (
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAjVBMVEVHcEwgPnMjQXYgPnMdPXIfPXMdOXAeO3AVKFYdOm4gPnMfOnAgPnP/3ACstMW+xNK6x9b/2wCWobilrsLx1BP/2gD/2gDAsDn///8gPnM3quLR6PX/2wDo9fwmpN5LsOMcO3Hy+f284vUEnt1DXYim1O4WNG19xOoBK2mJyOzI0t9ou+YukMeSnLMRfLVroNVOAAAAGHRSTlMASnnG7KxqHQ8y1V6TvvXN6qaSnrjlkclcJxiVAAABS0lEQVQokWWSCZKEIAxFg4J728tsLIqKu90z9z/egHYp6q+yonkkhckHMIoJZthNQjgLMcYikpCIMefIvC2HIoZ2LGTYNzEwAoTJHN+K2Pzqs0Xl0KSTmFInmJMeWLBrJkXpqHr+igEcBhYsm5HSqu0l51zGQMgOylbDseBGL8CxBbu/glIq2gX2gJEFByE0bAtVcMmlgijcYNmoPKd5zWXfjs+igsSubCqRU1rorjqqHGLHrqRjrRsL+dTdlQDfvu1An7IwjfvKXExPyIZpLuucVrXSUNR6CmiDZdeattQ8tLrpNLGHMMz5WZP5D+/z677OtuzSBVW/8z4uWZZd1q0wL/y43q4PH88NMyMLvle5QFN5P8FggfB9+QlOELmrV0hwhK63QjjaMmT2l7NzZcC8/VmyuTJkBA6KF88HyD2b21QkboSx67x9+w+2eyfCeoeYvAAAAABJRU5ErkJggg==" 
                alt="Pacis Insurance Logo" 
                style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto 15px' }}
              />
            ) : (
              <div className="insurance-icon">🏥</div>
            )}
            </div>
            <div className="service-content">
              <h3>{provider.name}</h3>
              <p>{provider.type}</p>
              <span className="insurance-status">✓ {provider.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '50px', 
        background: 'var(--light-gray)', 
        padding: '40px', 
        borderRadius: '12px' 
      }}>
        <h3 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: 'var(--primary-blue)' }}>
          Other Payment Options
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>💵</div>
            <strong>Cash Payment</strong>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '5px' }}>KES accepted</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>💳</div>
            <strong>Card Payment</strong>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '5px' }}>Visa, Mastercard</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>📱</div>
            <strong>M-Pesa</strong>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '5px' }}>Mobile payment</p>
          </div>
          <div>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏦</div>
            <strong>Bank Transfer</strong>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '5px' }}>Direct deposit</p>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '40px', 
        textAlign: 'center',
        padding: '30px',
        background: 'var(--white)',
        borderRadius: '12px',
        boxShadow: '0 4px 16px var(--shadow)'
      }}>
        <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--text-dark)' }}>
          Need Help with Insurance?
        </h3>
        <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>
          Our billing team is here to assist you with insurance claims and payment plans
        </p>
        <button className="btn btn-primary">Contact Billing Department</button>
      </div>
    </section>
  )
}

export default Insurance
