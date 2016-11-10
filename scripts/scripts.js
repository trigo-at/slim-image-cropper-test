var cropper = new Slim(document.getElementById('myCropper'), {
	ratio: '3:4',
	minSize: {
		width: 250,
		height: 300,
	},
	size: {
		width: 250,
		height: 300,
	},
	download: true,
	instantEdit: true,
	label: 'Hochladen: Hier klicken oder eine Bilddatei drauf ziehen',
	buttonConfirmLabel: 'Fertig',
	buttonConfirmTitle: 'Fertig',
	buttonCancelLabel: 'Abrechen',
	buttonCancelTitle: 'Abrechen',
	buttonEditTitle: 'Bearbeiten',
	buttonRemoveTitle: 'Entfernen',
	buttonDownloadTitle: 'Herunterladen',
	buttonRotateTitle: 'Drehen',
	buttonUploadTitle: 'Hochladen',
	statusImageTooSmall:'Dieses Bild ist zu klein. Die Mindestgröße beträgt $0 pixel.'
});