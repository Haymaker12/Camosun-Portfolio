using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickupFood : MonoBehaviour
{
    [Header("Food Pickup Settings")]
    public int scoreUp =5;

    
    public GameObject timerObj;

    private void OnTriggerEnter(Collider other)
    {
    
        //If player collides with this pickup
        if (other.gameObject.tag == "Player"){
            
            timerObj.gameObject.GetComponent<ManagerTimerPoints>().pointsToAdd += scoreUp;

            Destroy(this.gameObject);
        }   

    }

}
