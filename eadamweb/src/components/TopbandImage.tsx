export default function TopbandImage() {
  return (
    <div className="topband">
      <div className="overlay">
        <img
          className="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAgCAYAAAASTprzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS8SURBVHgB7ZqPkesmEMa/yVwBTgUhFZw6CB3EHRwdnDswqeDcgZ0KnFTgSwW5V4F8Ffg6SLQ5eFohiT9Cll7e8JthZEsLu4IPhEBA4d5cmvRPkwS+U35AoZBJEVEhmyKiQjZFRIVsiogK2RQRFbIpIipkU0RUyKaIqJDNQ+C6aNK2SY9N2pj01qT3Jv3RpCvWh2LiMRIfTfrSpFfMGyOVX5n0yM6Trzfjb06k8fUT2nt7N35eMQ+2Xa8Rdh9IQKJdrvclslFYB4nlYhRNemnSLeCrbtKzkzd124Maax/p64hp2ynWx9+svNtAedaudvy+wON3YwzcRjjgsyEoafQb74i2pyxBTIzngRiFyV+bPDGQKHiD1sbXzvii4wn9ihYmf4qIpFOObdiQL2Xy78z/7Uj5Z/TFWQ+UV5l43fO3kXv8ComAK/MAvzCEseGFLiGkI4aFMQRd0+jfuP0dYo+uUGXAXqFb8U+IF9GTE6cM2EvHF8WqzW81kufi8SHwKVArXls25akcuwtG2vzCCpCIY4tWnSfcHzsCkU+VkE+grRR+9PGMtsI10ny5j4mQiASzPyGtM2p0hREjosFRxHB2yhvD3qO2J/YsY4U4ntC98XujkB4jR6A/PPtspwiIw4UUEpGN64xpaMeXGrG7BK4TFStHeuwkWD1u0N7EDnFwAWksQz2DP4k4ER3RPi6nQvXK5xBixE5hnunABfEikvBjywlNZ6xd5yZiWENAW6TF6IMP6UMIxI0eMeiIskKPoFgk5heRD8Ht7DNQI8wUAYnENMQcI4NFwi8ihXZCmcsGfhHxR8ccLyX2EapGrt9FRA9ob+41kIkmmgfz+zfEi4gaXiKen9Ff+LJzoN+Rz1vguvX1F/L5MP7G5nDCHF+RuJA3whdMmy9m8cCcXj12e7SiSREQ8SfSVo2HKrPyXEslVIZdib5iHnz+Yuo+hStWILTtQeQIiDhgPuYQ0ffMkgu+X6ENWF/D5ApoLq7muMRQ/W6OSzSIrfsf8T+GRGTnCNK59q0IiLia4xwiCpVh6+NXzEMV4esXzMMjVkKj/zayRztDj107uicUw1xvTPZNb+ztTKJdac4djRT8b2d8LUkiD4EVX/H5a6hEV0AK3wa8sreYjkDcYqOt7BfkUSO8TmT3H3M7yBEriojgG6lTBGS/6bknGu0IIZCOu8HsE5FEt2NNgXdGn4jovO0ge0zjGWnbHhJ+JomIb32kLCTavLZxcntTrB+KVUzMe0NYRMSB2Uuk4QrIJyJix+xShfSEbsdYTUT2ZM2CUQgjWR6q7Hu/PQnHn4rII9GPMUZExAltRXk/xGK+Luh2Rvs/lFezfMcIe/fbrxPiPwWR8DNZRPYCH5FqE5hE+6ESPbZ26H+bstRKqRiI8WjikpExxoqIcB/15EsxX9WALy7wWBER2vF1NmVL5kuZGPjmrnbyq5HyFxERWDC8ocbSzdiuscilERcjJfcDuxQRESrBFzWUYHlTRAR0P/qK8SVZXo15RGQFGoozRmz/BUO9wZ2QHvHZQ1ZZIWWQf4XhGKnCNIZjlJg2ctIIdzK+bgO+5ECeCtMm5xKf4r8wXzfj+4DhMoU5P9YuVeA69y0DNhtjU/0LzVuQeMBe0UIAAAAASUVORK5CYII="
          alt="e-adam"
          style={{ height: 20, top: -1.5, position: "relative" }}
        />
        <span className="times">×</span>
        <span className="lib">Tema Kütüphanesi</span>
      </div>
    </div>
  );
}
