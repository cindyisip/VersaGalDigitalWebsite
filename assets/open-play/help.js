/* Progressive enhancements; all core help content is readable without scripts. */
(() => {
  const demo = document.querySelector('[data-membership-demo]');
  if (demo) {
    const players = [...demo.querySelectorAll('[data-player]')];
    const rule = demo.querySelector('[data-rule]');
    function updateDemo() {
      const [a,b,c,d] = players.map(player => player.checked);
      const total = [a,b,c,d].filter(Boolean).length;
      const opposing = (a || b) && (c || d);
      const qualifies = rule.value === 'all' ? total === 4 : rule.value === 'any_two' ? total >= 2 : opposing;
      demo.querySelector('[data-result-title]').textContent = qualifies ? 'This game meets the group rule.' : 'This game does not meet the group rule.';
      const descriptions = {
        all: `${total} of 4 players are accepted members. Members Only needs all four.`,
        any_two: `${total} of 4 players are accepted members. 2+ Members Any Side needs at least two, wherever they play.`,
        opposing: `${[a,b].filter(Boolean).length} member(s) on Team 1; ${[c,d].filter(Boolean).length} on Team 2. Opposing Members needs at least one on each side.`
      };
      demo.querySelector('[data-result-explanation]').textContent = descriptions[rule.value];
      demo.querySelector('.vop-demo-result').dataset.qualifies = String(qualifies);
    }
    demo.hidden = false;
    demo.addEventListener('change', updateDemo);
    updateDemo();
  }

  const tools = document.querySelector('[data-faq-tools]');
  if (tools) {
    const search = tools.querySelector('input');
    const buttons = [...tools.querySelectorAll('[data-category]')];
    const sections = [...document.querySelectorAll('[data-faq-section]')];
    let category = 'all';
    function filter() {
      const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let count = 0;
      sections.forEach(section => {
        let sectionCount = 0;
        section.querySelectorAll('[data-faq-item]').forEach(item => {
          const text = item.textContent.toLocaleLowerCase();
          const matches = (category === 'all' || category === section.dataset.faqSection) && terms.every(term => text.includes(term));
          item.hidden = !matches;
          if (matches) { sectionCount++; count++; }
        });
        section.hidden = sectionCount === 0;
      });
      tools.querySelector('[data-faq-count]').textContent = `${count} ${count === 1 ? 'answer' : 'answers'} found`;
      document.querySelector('[data-faq-empty]').hidden = count !== 0;
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    }
    tools.hidden = false;
    search.addEventListener('input', filter);
    buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; filter(); }));
    function revealHash() {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(id);
      if (target && target.matches('[data-faq-item]')) {
        category = 'all'; search.value = ''; filter(); target.open = true;
        target.scrollIntoView({block:'start'});
      }
    }
    filter();
    revealHash();
    window.addEventListener('hashchange', revealHash);
  }
})();
