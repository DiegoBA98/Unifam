//function to export pdf DOC
function pdfexport(){
  //variables
  //labels
  var ldept = document.getElementById('ldpt').innerText,
      lpty = document.getElementById('lpty').innerText,
      ltitle = document.getElementById('tlt').innerText,
      lsdesc = document.getElementById('lsdesc').innerText,
      lwtlt = document.getElementById('lwtlt').innerText,
      lhbd = document.getElementById('lhbd').innerText,
      ldexc = document.getElementById('ldex').innerText,
      lwex = document.getElementById('lwex').innerText,
      lhbdex = document.getElementById('lhbdex').innerText,
      smallinfo = '** This is a small info in red, you can modified this line';
  //input
  var dname = document.getElementById('dname').value,
      indpt = document.getElementById('indpt').value,
      inproty = document.getElementById('inpty').value,
      inprod = document.getElementById('inprod').value,
      insdesc = document.getElementById('insdesc').value,
      inwtlt = document.getElementById('inwtlt').value;
      inhbds = [
                document.getElementById('inhbd0').value,
                document.getElementById('inhbd1').value,
                document.getElementById('inhbd2').value,
                document.getElementById('inhbd3').value,
                document.getElementById('inhbd4').value
               ],
      indexcs = [
                document.getElementById('index0').value,
                document.getElementById('index1').value,
                document.getElementById('index2').value
              ],
      inwexs = [
                document.getElementById('inwex0').value,
                document.getElementById('inwex1').value,
                document.getElementById('inwex2').value
              ],
      inhbdexs = [
                document.getElementById('inhbdex0').value,
                document.getElementById('inhbdex1').value,
                document.getElementById('inhbdex2').value,
                document.getElementById('inhbdex3').value,
                document.getElementById('inhbdex4').value
                ];
  var x = 0, y = 0, z = 0, w = 0;

  //jspdf part
  var doc = new jsPDF();
  //standard variables
  var boldFont = doc.setFontStyle('bold'),
      normalFont = doc.setFontStyle('normal');

  //department
  doc.setFontStyle('bold');
  doc.setFontSize(10);
  doc.text(ldept + ' ' + indpt, 5, 5);
  doc.text(lpty + ' ' + inproty, 5, 10);
  //title
  doc.setFontSize(22);
  doc.text(ltitle + ' ' + inprod, 60, 30);
  //content
  doc.setFontSize(10);
  doc.setFontStyle('bold');
  doc.text(lsdesc, 10, 50);
  doc.setFontStyle('normal');
  doc.text(insdesc, 10, 60, {maxWidth: 80});
  doc.setFontStyle('bold');
  doc.text(lwtlt, 10, 70);
  doc.setFontStyle('normal');
  doc.text(inwtlt, 10, 80, {maxWidth: 80});
  //bullet description left side
  doc.setFontStyle('bold');
  doc.setFontSize(10);
  doc.text(lhbd, 10, 100);
  doc.setFontSize(9);
  doc.setFontStyle('normal');
  for (var i = 0; i < inhbds.length; i++) {
    if( inhbds[i] != ''){
      doc.text(i + ': ' + inhbds[i], 10, 110 + w, {maxWidth: 80});
    }
    w += 10;
  }
  //bullet example right side
  //description
  doc.setFontStyle('bold');
  doc.setFontSize(10);
  doc.text(ldexc, 100, 50);
  doc.setFontSize(9);
  doc.setFontStyle('normal');
  for (var i = 0; i < indexcs.length; i++) {
    if( indexcs[i] != ''){
      doc.text(i + ': ' + indexcs[i], 100, 60 + x, {maxWidth: 80});
    }
    x += 10;
  }
  //web Title
  doc.setFontStyle('bold');
  doc.setFontSize(10);
  doc.text(lwex, 100, 90);
  doc.setFontSize(9);
  doc.setFontStyle('normal');
  for (var i = 0; i < inwexs.length; i++) {
    if( inwexs[i] != ''){
      doc.text(i + ': ' + inwexs[i], 100, 100 + y, {maxWidth: 100});
    }
    y += 10;
  }
  //Highlight
  doc.setFontStyle('bold');
  doc.setFontSize(10);
  doc.text(lhbdex, 100, 130);
  doc.setFontSize(9);
  doc.setFontStyle('normal');
  for (var i = 0; i < inhbdexs.length; i++) {
    if( inhbdexs[i] != ''){
      doc.text(i + ': ' + inhbdexs[i], 100, 140 + z, {maxWidth: 100});
    }
    z += 10;
  }
  //info in redinfo
  doc.setTextColor(255, 0, 0);
  doc.setFontSize(8);
  doc.text(smallinfo, 40, 210, {maxWidth: 150});
  doc.output('dataurlnewwindow',{filename: dname.value});
}

//input clear function
function inputClear(){
  var indpt = document.getElementById('indpt').value = '',
      inproty = document.getElementById('inpty').value = '',
      inprod = document.getElementById('inprod').value = '',
      insdesc = document.getElementById('insdesc').value = '',
      inwtlt = document.getElementById('inwtlt').value = '';
      inhbds = [
                document.getElementById('inhbd0').value = '',
                document.getElementById('inhbd1').value = '',
                document.getElementById('inhbd2').value = '',
                document.getElementById('inhbd3').value = '',
                document.getElementById('inhbd4').value = ''
               ],
      indexcs = [
                document.getElementById('index0').value = '',
                document.getElementById('index1').value = '',
                document.getElementById('index2').value = ''
              ],
      inwexs = [
                document.getElementById('inwex0').value = '',
                document.getElementById('inwex1').value = '',
                document.getElementById('inwex2').value = ''
              ],
      inhbdexs = [
                document.getElementById('inhbdex0').value = '',
                document.getElementById('inhbdex1').value = '',
                document.getElementById('inhbdex2').value = '',
                document.getElementById('inhbdex3').value = '',
                document.getElementById('inhbdex4').value = ''
                ];
}
