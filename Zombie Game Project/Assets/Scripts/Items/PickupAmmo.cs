using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickupAmmo : MonoBehaviour
{
    [Header("Ammo Pickup Amount")]
    public int ammoUp = 5;


    //Trigger is called on collision 
    private void OnTriggerEnter(Collider other)
    {

        //If player collides with this pickup
        if (other.gameObject.tag == "Player")
        {

            //grab the current stats of the player
            PlayerStats stat = other.gameObject.GetComponent<PlayerStats>();


            if (stat.ammo < stat.maxAmmo)
            {
                stat.ammo += ammoUp;

                //double check for over healing if in the future this pickup adds more than 1.
                if (stat.ammo > stat.maxAmmo)
                {
                    stat.ammo = stat.maxAmmo;
                }
            }

            Debug.Log("Ammo:  " + stat.ammo + " / " + stat.maxAmmo);
            Destroy(this.gameObject);

        }

    }
}
