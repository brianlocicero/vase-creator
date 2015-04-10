class StatsInit {

  constructor(stats, id, pos, top, left) {
    this.stats = stats;
    stats.setMode(0);
    stats.domElement.style.position = pos;
    stats.domElement.style.top = top;
    stats.domElement.style.left = left;
    document.getElementById(id).appendChild(stats.domElement);

    return stats;
  }

}