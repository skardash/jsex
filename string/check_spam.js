function checkSpam(str) {
	if (!str) return false;
	str = str.toLowerCase();
	spam_words = ['viagra', 'XXX'];
	spam = false;
	for (const w of spam_words) {
		wl = w.toLowerCase();
		if (str.includes(wl, 0)) {
			spam = true;
			break;
		}
	}
	return spam;
}