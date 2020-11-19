/*
 * This component will be responsible for removing objects the player may have thrown out of the scene etc.
 */

AFRAME.registerComponent('custom-object', {
	tick: function () 
	{
		let position = new THREE.Vector3();
		let customObj = this.el;
		let currentPos = customObj.object3D.getWorldPosition(position);
		
        //If an object, such as a pokéball falls out of the scene, it will despawn
		if(currentPos.y < -10)
		{
			customObj.parentNode.removeChild(customObj);
		}
	}
});