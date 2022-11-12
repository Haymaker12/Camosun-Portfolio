using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Flock : MonoBehaviour
{
    public FlockManager myManager;
    public int health = 1;
    bool turning;

    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        turning = false;
        speed = Random.Range(myManager.minSpeed, myManager.maxSpeed);
    }

    // Update is called once per frame
    void Update()
    {
        ApplyBounds();

        transform.Translate(0.0f, 0.0f, Time.deltaTime * speed);

        if (turning == false)
        {
            TurningFalse();
        }
    }

        //Pseudo Code PART2
    /*
        Define a boundary using BOUNDS
        Determine whether the boid is within the boundary using Bounds.Contains(coordinate)

        *TURNING = TRUE*
        IF outside, turning = true and turn back the boid to facing the center of the flock manager
        OR
        If raycast collided, set turning = true and set a new direction to the reflected direction

        *TURNING = FALSE*
        Change the speed (10% Chance) or execute ApplyRules() (20% Chance)
    */


    void ApplyRules()   //Changes the heading direction of the flock, only called when 'turning' == false
    {
        GameObject [] gos = myManager.allBoids;

        Vector3 vCenter = Vector3.zero; //Center of our flock
        Vector3 vAvoid = Vector3.zero;  //Direction to move away from collisions with other flocks

        float groupSpeed = 0.01f;   //Average speed of the flock
        float nDistance = 1.0f;     //Distance to the neighbour
        
        int groupSize = 0;          //Size of the local group


        foreach(GameObject go in gos)
        {
            if(go == this.gameObject) continue;

            //How far apart is this boid to the current selected boid
            nDistance = Vector3.Distance(go.transform.position, this.transform.position);

            //Compare nDistance vs the neighbour distance defined in FlockManager script
            if(nDistance <= myManager.neighbourDistance)
            {
                vCenter += go.transform.position;
                groupSize++;

                if(nDistance < myManager.neighbourCollision)
                {
                    vAvoid += (this.transform.position - go.transform.position);
                }

                Flock anotherFlock = go.GetComponent<Flock>();
                groupSpeed += anotherFlock.speed;
            }

            if(groupSize > 0)
            {
                vCenter = vCenter / groupSize;

                //Calculates speed
                if(Random.Range(0, 100) <= 10.0f)
                {
                    speed = groupSpeed / groupSize;
                }
                Vector3 direction = (vCenter + vAvoid - this.transform.position);
                if(direction != Vector3.zero)
                {
                    this.transform.rotation = Quaternion.Slerp(this.transform.rotation, 
                                                                Quaternion.LookRotation(direction),
                                                                myManager.rotationSpeed * Time.deltaTime);    
                }
            }

        }
    }


    //Function used to create a boundary
    void ApplyBounds()
    {
        Bounds boidBoundary = new Bounds (myManager.transform.position, myManager.flockBoundary);
        
        //If the boid is not within the boundary
        if(!boidBoundary.Contains(this.transform.position))
        {
            turning = true;
            Vector3 cDirection = (myManager.transform.position - this.transform.position);
            this.transform.rotation = Quaternion.Slerp(this.transform.rotation,
                                                        Quaternion.LookRotation(cDirection),
                                                        myManager.rotationSpeed*Time.deltaTime);
        }

        //Raycasting used to detect the cube in the center of the boundary
        RaycastHit hit = new RaycastHit();
        Ray ray = new Ray(this.transform.position, this.transform.forward);

        //If the boids are about to collide with the object
        if(Physics.Raycast(transform.position, this.transform.forward * 50.0f, out hit))
        {
            turning = true;

            //The boid shall steer away from the center cube
            Vector3 directionHit = Vector3.Reflect(this.transform.forward, hit.normal);

            this.transform.rotation = Quaternion.Slerp(this.transform.rotation, 
                                                        Quaternion.LookRotation(directionHit),
                                                        myManager.rotationSpeed * Time.deltaTime);  
        }
    }

    void TurningFalse()
    {
            if (Random.Range(0,100) < 20)
            {
                ApplyRules();
            }
            else if (Random.Range(0,100) < 10)
            {
                speed = Random.Range(myManager.minSpeed, myManager.maxSpeed);
            }
    }

    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.tag == "Bullet")
        {
            health--;
        }

        if (other.gameObject.tag == "Knife")
        {
            
            if (Random.Range(0, 100) > 80)
            {
                Debug.Log("MISS");
            }
            else
            {
                Debug.Log("HIT");
                health--;
            }
        }
    }
}
