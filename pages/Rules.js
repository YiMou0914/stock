export function getGuaRule(gua){
	if(gua=="111"){
		return "乾卦";
	}else if(gua=="011"){
		return "兑卦";
	}else if(gua=="101"){
		return "离卦";
	}else if(gua=="001"){
		return "震卦";
	}else if(gua=="110"){
		return "巽卦";
	}else if(gua=="010"){
		return "坎卦";
	}else if(gua=="100"){
		return "艮卦";
	}else if(gua=="000"){
		return "坤卦";
	}
}

export function getGuaXiang(shang,xia){
	if(shang=="111"){
		return qianGua(xia);
	}
	else if(shang=="011"){
		return duiGua(xia);
	}
	else if(shang=="101"){
		return liGua(xia);
	}
	else if(shang=="001"){
		return zhenGua(xia);
	}
	else if(shang=="110"){
		return xunGua(xia);
	}
	else if(shang=="010"){
		return kanGua(xia);
	}
	else if(shang=="100"){
		return genGua(xia);
	}
	else if(shang=="000"){
		return kunGua(xia);
	}
}

//坤卦
function kunGua(xia){
	if(xia=="111"){
		return "地天泰";
	}
	else if(xia=="011"){
		return "地泽临";
	}
	else if(xia=="101"){
		return "地火明夷";
	}
	else if(xia=="001"){
		return "地雷复";
	}
	else if(xia=="110"){
		return "地风升";
	}
	else if(xia=="010"){
		return "地水师";
	}
	else if(xia=="100"){
		return "地山谦";
	}
	else if(xia=="000"){
		return "地地坤";
	}
}

//艮卦
function genGua(xia){
	if(xia=="111"){
		return "山天大畜";
	}
	else if(xia=="011"){
		return "山泽损";
	}
	else if(xia=="101"){
		return "山火贲";
	}
	else if(xia=="001"){
		return "山雷颐";
	}
	else if(xia=="110"){
		return "山风蛊";
	}
	else if(xia=="010"){
		return "山水蒙";
	}
	else if(xia=="100"){
		return "山山艮";
	}
	else if(xia=="000"){
		return "山地剥";
	}
}

//坎卦
 function kanGua(xia){
	if(xia=="111"){
		return "水天需";
	}
	else if(xia=="011"){
		return "水泽节";
	}
	else if(xia=="101"){
		return "水火既济";
	}
	else if(xia=="001"){
		return "水雷屯";
	}
	else if(xia=="110"){
		return "水风井";
	}
	else if(xia=="010"){
		return "水水坎";
	}
	else if(xia=="100"){
		return "水山蹇";
	}
	else if(xia=="000"){
		return "水地比";
	}
}

//巽卦
function xunGua(xia){
	if(xia=="111"){
		return "风天小畜";
	}
	else if(xia=="011"){
		return "风泽中孚";
	}
	else if(xia=="101"){
		return "风火家人";
	}
	else if(xia=="001"){
		return "风雷益";
	}
	else if(xia=="110"){
		return "风风巽";
	}
	else if(xia=="010"){
		return "风水涣";
	}
	else if(xia=="100"){
		return "风山渐";
	}
	else if(xia=="000"){
		return "风地观";
	}
}

//震卦
 function zhenGua(xia){
	if(xia=="111"){
		return "雷天大壮";
	}
	else if(xia=="011"){
		return "雷泽归妹";
	}
	else if(xia=="101"){
		return "雷火丰";
	}
	else if(xia=="001"){
		return "雷雷震";
	}
	else if(xia=="110"){
		return "雷风恒";
	}
	else if(xia=="010"){
		return "雷水解";
	}
	else if(xia=="100"){
		return "雷山小过";
	}
	else if(xia=="000"){
		return "雷地豫";
	}
}

//离卦
 function liGua(xia){
	if(xia=="111"){
		return "火天大有";
	}
	else if(xia=="011"){
		return "火泽睽";
	}
	else if(xia=="101"){
		return "火火离";
	}
	else if(xia=="001"){
		return "火雷噬磕";
	}
	else if(xia=="110"){
		return "火风鼎";
	}
	else if(xia=="010"){
		return "火水未济";
	}
	else if(xia=="100"){
		return "火山旅";
	}
	else if(xia=="000"){
		return "火地晋";
	}
}

//兑卦
function duiGua(xia){
	if(xia=="111"){
		return "泽天夬";
	}
	else if(xia=="011"){
		return "泽泽兑";
	}
	else if(xia=="101"){
		return "泽火革";
	}
	else if(xia=="001"){
		return "泽雷随";
	}
	else if(xia=="110"){
		return "泽风大过";
	}
	else if(xia=="010"){
		return "泽水困";
	}
	else if(xia=="100"){
		return "泽山咸";
	}
	else if(xia=="000"){
		return "泽地萃";
	}
}

//乾卦
function qianGua(xia){
	if(xia=="111"){
		return "天天乾";
	}
	else if(xia=="011"){
		return "天泽履";
	}
	else if(xia=="101"){
		return "天火同人";
	}
	else if(xia=="001"){
		return "天雷无妄";
	}
	else if(xia=="110"){
		return "天风姤";
	}
	else if(xia=="010"){
		return "天水讼";
	}
	else if(xia=="100"){
		return "天山遁";
	}
	else if(xia=="000"){
		return "天地否";
	}
}