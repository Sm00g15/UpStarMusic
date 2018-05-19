// Todo: Create Artist Model
const mongoose = require('mongoose');
const AlbumSchema = require('./album')
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
	name: String,
	age: Number,
	yearsActive: Number,
	image: String,
	genre: String,
	website: String,
	netWorth: Number,
	labelName: String, 
	retired: String,
	Albums: [AlbumSchema]
});
const Artist = mongoose.model('Artist', ArtistSchema)
module.exports = Artist;