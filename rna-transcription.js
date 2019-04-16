
const toRna = (rna) => {
	let dna = "";
	if (rna.length === 0) {
		return ''
	} else {
		for (var i=0; i < rna.length; i++) {
			let char = rna.charAt(i)
			if (char === "C") { dna += 'G'}
			if (char === "G") {dna += "C"}
			if (char === "T") {dna += "A"}
			if (char === "A") {dna += "U"}
		}
		return dna
	}
}


export { toRna }