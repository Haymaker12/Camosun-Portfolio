using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickupHealth : MonoBehaviour
{
    [Header("Health pickup amount")]
    public int healUp = 1;

    //Trigger is called on collision 
    private void OnTriggerEnter(Collider other)
    {
        //detect if player or whisperer and call heal function  
        if (other.gameObject.tag == "Player"){
            PlayerStats playerStat = other.gameObject.GetComponent<PlayerStats>();
            HealPlayer(playerStat);
        }
        if(other.gameObject.tag == "Whisperer"){
            Debug.Log("Whisperer picked up health");
            WhispererScript whispererStat = other.gameObject.GetComponent<WhispererScript>();
            HealWhisperer(whispererStat);
        }

    } 

    private void HealPlayer(PlayerStats stat) 
    {
        int canHeal = stat.maxHealth - stat.health;

        if(canHeal >= healUp){
            stat.health += healUp;
            Destroy(this.gameObject);
        }

    }
    
    private void HealWhisperer(WhispererScript stat)
    {
        int canHeal = stat.maxHealth - stat.health; 

        if(canHeal >= healUp){
            stat.health += healUp;
            Destroy(this.gameObject);
        }
    }
    

}
